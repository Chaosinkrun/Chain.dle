/**
 * This file is intentionally minimal in the manual bank version.
 * No AI generation needed — puzzles come from chains.js.
 *
 * The cron still runs nightly to pre-warm the Redis cache for tomorrow,
 * so the first real visitor gets an instant response rather than a
 * cold-start lookup.
 */

import { Redis } from "@upstash/redis";
import { getChainForDate } from "./chains.js";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

function tomorrowKey() {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + 1);
  return `chain-${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
}

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const key = tomorrowKey();
  const dateStr = key.replace("chain-", "");

  try {
    const existing = await redis.get(key);
    if (existing) {
      return res.status(200).json({ message: "Already cached", date: dateStr });
    }

    const puzzle = getChainForDate(dateStr);
    const payload = {
      theme: puzzle.theme,
      chain: puzzle.chain,
      date: dateStr,
      puzzleNumber: puzzle.puzzleNumber,
      servedAt: new Date().toISOString(),
    };

    await redis.set(key, payload, { ex: 172800 });

    console.log(`Pre-cached puzzle #${puzzle.puzzleNumber} for ${dateStr}`);
    return res.status(200).json({
      message: "Cached successfully",
      date: dateStr,
      puzzleNumber: puzzle.puzzleNumber,
      words: puzzle.chain.map((c) => c.word).join(" → "),
    });
  } catch (err) {
    console.error("Pre-cache error:", err);
    return res.status(500).json({ error: "Failed to pre-cache", details: err.message });
  }
}
