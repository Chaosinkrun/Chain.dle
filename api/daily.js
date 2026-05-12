import { Redis } from "@upstash/redis";
import { getChainForDate } from "./chains.js";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

function todayKey() {
  const d = new Date();
  return `chain-${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const key = todayKey();
  const dateStr = key.replace("chain-", "");

  try {
    // Check Redis cache first
    const cached = await redis.get(key);
    if (cached) {
      return res.status(200).json({ ...cached, cached: true });
    }

    // Pull today's puzzle from the bank
    const puzzle = getChainForDate(dateStr);
    const payload = {
      theme: puzzle.theme,
      chain: puzzle.chain,
      date: dateStr,
      puzzleNumber: puzzle.puzzleNumber,
      servedAt: new Date().toISOString(),
    };

    // Cache for 48h
    await redis.set(key, payload, { ex: 172800 });

    return res.status(200).json({ ...payload, cached: false });
  } catch (err) {
    console.error("Daily handler error:", err);

    // Fallback: serve directly from bank without caching
    try {
      const puzzle = getChainForDate(dateStr);
      return res.status(200).json({
        theme: puzzle.theme,
        chain: puzzle.chain,
        date: dateStr,
        puzzleNumber: puzzle.puzzleNumber,
        servedAt: new Date().toISOString(),
        cached: false,
        fallback: true,
      });
    } catch (e2) {
      return res.status(500).json({ error: "Failed to load puzzle", details: e2.message });
    }
  }
}
