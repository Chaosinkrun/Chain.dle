# Chain·dle — Manual Puzzle Bank Edition

A daily word chain puzzle with a hand-crafted puzzle bank. No AI generation — you control every puzzle.

---

## How it works

- All puzzles live in **`api/chains.js`** — a plain JS array you edit directly
- Puzzles rotate by date: Day 0 → puzzle 0, Day 1 → puzzle 1, and so on
- When the list is exhausted it cycles back to puzzle 0 automatically
- Redis caches each puzzle for 48h so every visitor gets an instant response
- If Redis is down, the puzzle is served directly from the bank — the game never breaks
- **No Anthropic API key needed — zero AI running costs**

---

## Adding or editing puzzles

Open **`api/chains.js`** and add to the `chains` array:

```js
{
  theme: "Your cryptic theme hint...",
  chain: [
    { word: "CRANE", clue: "Start here: a large bird or lifting machine." },
    { word: "CABLE", clue: "From CRANE: both involve tension — thick rope or wire." },
    { word: "OCEAN", clue: "From CABLE: undersea cables cross this vast body of water." },
    { word: "WAVES", clue: "From OCEAN: what the ocean perpetually makes." },
  ],
},
```

Rules:
- Every word exactly **5 letters**, common English
- Clues 2–4 must **explicitly reference the previous word**
- Theme should be **cryptic but fair** — makes sense in hindsight

Then commit and push — Vercel redeploys in seconds.

---

## See which puzzle lands on which date

```bash
node --input-type=module << 'EOF'
import { printSchedule } from './api/chains.js';
printSchedule(30);
EOF
```

Output:
```
2025-01-01  [#1]  STONE → CLIFF → EAGLE → CLOUD
2025-01-02  [#2]  GRAIN → FLOUR → DOUGH → BREAD
...
```

---

## Deploy

**Prerequisites:** Vercel account, GitHub account, Upstash account (free tier). No Anthropic key needed.

**1. Push to GitHub**
```bash
git init && git add . && git commit -m "init"
git remote add origin https://github.com/YOU/chaindle.git
git push -u origin main
```

**2. Create Upstash Redis database**
- [console.upstash.com](https://console.upstash.com) → Create Database → copy `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` from the REST API section

**3. Import to Vercel**
- [vercel.com/new](https://vercel.com/new) → import repo → add these env vars:

| Name | Value |
|------|-------|
| `CRON_SECRET` | `openssl rand -hex 32` |
| `UPSTASH_REDIS_REST_URL` | From Upstash |
| `UPSTASH_REDIS_REST_TOKEN` | From Upstash |

**4. Deploy and verify**
- Check **Settings → Crons** for `/api/generate-tomorrow` (runs 11pm UTC nightly)
- Visit `/api/daily` to confirm today's puzzle loads

---

## File structure

```
chaindle/
├── api/
│   ├── chains.js             ← ✏️  EDIT THIS — your puzzle bank
│   ├── daily.js              ← Serves today's puzzle
│   └── generate-tomorrow.js  ← Nightly cron pre-warms Redis
├── public/
│   └── index.html            ← The game
├── vercel.json
├── package.json
└── .env.example
```

---

## Costs

| Service | Cost |
|---------|------|
| Vercel Hobby | Free |
| Upstash Redis | Free (10k req/day) |
| Anthropic API | **Not needed — £0** |
