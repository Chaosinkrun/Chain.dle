/**
 * CHAIN·DLE PUZZLE BANK
 * ─────────────────────
 * Add new puzzles to this array whenever you like, then redeploy.
 *
 * Rules:
 *  - Every word must be exactly 5 letters
 *  - Every word must be a common English word
 *  - The first clue introduces the starting word
 *  - Clues 2–4 must explicitly reference the previous word
 *  - The theme should be cryptic but make sense in hindsight
 *
 * Rotation:
 *  Puzzles are served in order by index. The index is derived from
 *  the number of days since a fixed epoch date (2025-01-01), so:
 *    Day 0  → chains[0]
 *    Day 1  → chains[1]
 *    ...
 *    Day N  → chains[N % chains.length]   (cycles when exhausted)
 *
 *  This means every user on the same calendar day gets the same puzzle,
 *  and you can predict exactly which puzzle lands on which date.
 */

export const chains = [
  // ── 1 ──────────────────────────────────────────────────────────────────────
  {
    theme: "Each word takes you one step further from the ground...",
    chain: [
      {
        word: "STONE",
        clue: "Start here: the earth's solid building block.",
      },
      {
        word: "CLIFF",
        clue: "From STONE: a sheer face of rock — where STONEs stack to dizzying heights.",
      },
      {
        word: "EAGLE",
        clue: "From CLIFF: the bird that nests on CLIFF edges and rules the sky.",
      },
      {
        word: "CLOUD",
        clue: "From EAGLE: higher than any EAGLE can fly — find the 5-letter word for vapour in the sky.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────────────────────
  {
    theme: "A journey through the kitchen, one transformation at a time...",
    chain: [
      {
        word: "GRAIN",
        clue: "Start here: the raw seed harvested from the field.",
      },
      {
        word: "FLOUR",
        clue: "From GRAIN: what you get when you grind GRAIN into a fine powder.",
      },
      {
        word: "DOUGH",
        clue: "From FLOUR: mix FLOUR with water and you knead this soft, sticky mass.",
      },
      {
        word: "BREAD",
        clue: "From DOUGH: bake that DOUGH and pull this from the oven.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────────────────────
  {
    theme: "Follow the water as it finds its way home...",
    chain: [
      {
        word: "FROST",
        clue: "Start here: ice crystals that coat the world on a cold morning.",
      },
      {
        word: "THAW",
        clue: "From FROST: what happens to FROST when the sun rises — but this word needs 5 letters. Find the 5-letter synonym: what the ice does when it melts slowly.",
      },
      {
        word: "CREEK",
        clue: "From THAW: the meltwater runs into a small, narrow stream — find the 5-letter word.",
      },
      {
        word: "DELTA",
        clue: "From CREEK: many CREEKs feed rivers that fan out into this at the sea.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────────────────────
  {
    theme: "What starts as chaos ends as calm...",
    chain: [
      {
        word: "STORM",
        clue: "Start here: wind, rain, and fury all at once.",
      },
      {
        word: "FLOOD",
        clue: "From STORM: heavy STORMs cause rivers to overflow — find this 5-letter watery disaster.",
      },
      {
        word: "MUDDY",
        clue: "From FLOOD: after a FLOOD recedes, the ground is left like this.",
      },
      {
        word: "CLEAR",
        clue: "From MUDDY: the opposite of MUDDY — what the sky eventually becomes.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────────────────────
  {
    theme: "Every hero needs these things, in this order...",
    chain: [
      {
        word: "QUEST",
        clue: "Start here: the mission that calls a hero to adventure.",
      },
      {
        word: "SWORD",
        clue: "From QUEST: no QUEST is undertaken without a weapon — find this classic blade.",
      },
      {
        word: "BRAVE",
        clue: "From SWORD: the quality needed to wield a SWORD in battle — 5 letters.",
      },
      {
        word: "GLORY",
        clue: "From BRAVE: what the BRAVE hero earns at the end of the story.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────────────────────
  {
    theme: "The night sky, decoded step by step...",
    chain: [
      {
        word: "NIGHT",
        clue: "Start here: the dark half of every day.",
      },
      {
        word: "STARS",
        clue: "From NIGHT: what fills the sky once NIGHT falls and clouds clear.",
      },
      {
        word: "LIGHT",
        clue: "From STARS: what STARS emit across billions of miles of space.",
      },
      {
        word: "PRISM",
        clue: "From LIGHT: pass LIGHT through this 5-letter glass shape to split it into colour.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────────────────────
  {
    theme: "A story told in four acts, all at sea...",
    chain: [
      {
        word: "SHORE",
        clue: "Start here: where land meets the sea.",
      },
      {
        word: "WAVES",
        clue: "From SHORE: what rushes at the SHORE endlessly — rolling water movements.",
      },
      {
        word: "DRIFT",
        clue: "From WAVES: what a boat does when WAVES push it off course.",
      },
      {
        word: "WRECK",
        clue: "From DRIFT: the grim fate of a ship that DRIFTs onto rocks.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────────────────────
  {
    theme: "From a single spark to something that lasts forever...",
    chain: [
      {
        word: "EMBER",
        clue: "Start here: the glowing fragment left after a fire dies down.",
      },
      {
        word: "SMOKE",
        clue: "From EMBER: what rises from a dying EMBER as it fades.",
      },
      {
        word: "HAZE",
        clue: "From SMOKE: SMOKE disperses into this — but find the 5-letter version: a misty, unclear atmosphere.",
      },
      {
        word: "GHOST",
        clue: "From HAZE: what haunts through the HAZE — a spirit, a 5-letter apparition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────────────────────
  {
    theme: "The life of a song, from silence to silence...",
    chain: [
      {
        word: "MUSIC",
        clue: "Start here: organised sound that moves the soul.",
      },
      {
        word: "CHORD",
        clue: "From MUSIC: the building block of MUSIC — three or more notes played together.",
      },
      {
        word: "LYRIC",
        clue: "From CHORD: CHORDs support these — the words sung over the melody.",
      },
      {
        word: "VERSE",
        clue: "From LYRIC: a stanza of LYRICs — one section of a song or poem.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────────────────────
  {
    theme: "Nature's own clock, ticking through four faces...",
    chain: [
      {
        word: "BLOOM",
        clue: "Start here: what flowers do in spring.",
      },
      {
        word: "PETAL",
        clue: "From BLOOM: the colourful part of a BLOOMing flower — one delicate piece.",
      },
      {
        word: "FRUIT",
        clue: "From PETAL: after PETALs fall, the plant produces this — its sweet reward.",
      },
      {
        word: "SEEDS",
        clue: "From FRUIT: crack open a FRUIT and you find these — the start of the next BLOOM.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────────────────────
  {
    theme: "Power, passed from hand to hand through the ages...",
    chain: [
      {
        word: "CROWN",
        clue: "Start here: the symbol of royal authority worn on the head.",
      },
      {
        word: "REIGN",
        clue: "From CROWN: what a monarch does once they wear the CROWN — their period of rule.",
      },
      {
        word: "EDICT",
        clue: "From REIGN: an official order issued during a REIGN — a formal decree.",
      },
      {
        word: "REBEL",
        clue: "From EDICT: one who refuses to follow an EDICT — rises up against authority.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────────────────────
  {
    theme: "The anatomy of a secret...",
    chain: [
      {
        word: "TRUTH",
        clue: "Start here: the thing a secret conceals.",
      },
      {
        word: "CLOAK",
        clue: "From TRUTH: to hide the TRUTH is to CLOAK it — also a garment of concealment.",
      },
      {
        word: "SHADE",
        clue: "From CLOAK: a CLOAK provides this — shadow, darkness, cover.",
      },
      {
        word: "BLIND",
        clue: "From SHADE: too much SHADE and you become this — unable to see.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────────────────────
  {
    theme: "A craftsman's journey, from raw material to finished work...",
    chain: [
      {
        word: "TIMBER",
        clue: "Start here — but TIMBER is 6 letters, so find the 5-letter word for cut wood ready to use.",
      },
      {
        word: "PLANK",
        clue: "From WOOD: a single flat piece of WOOD cut to length.",
      },
      {
        word: "JOINT",
        clue: "From PLANK: where two PLANKs meet and are fixed together — a carpenter's connection.",
      },
      {
        word: "TABLE",
        clue: "From JOINT: assemble enough PLANKs with JOINTs and you build this piece of furniture.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────────────────────
  {
    theme: "The mind at its most extreme...",
    chain: [
      {
        word: "DREAM",
        clue: "Start here: what the mind creates when the body sleeps.",
      },
      {
        word: "VIVID",
        clue: "From DREAM: the most memorable DREAMs are described this way — intensely bright and real.",
      },
      {
        word: "STARK",
        clue: "From VIVID: the opposite feeling — bare, harsh, and completely STARK.",
      },
      {
        word: "BLEAK",
        clue: "From STARK: a STARK landscape is often described as this — cold, empty, and without hope.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────────────────────
  {
    theme: "From the smallest scale to the grandest...",
    chain: [
      {
        word: "ATOMS",
        clue: "Start here: the tiny particles everything is made of.",
      },
      {
        word: "CELLS",
        clue: "From ATOMS: ATOMS form molecules that form these — the basic unit of all living things.",
      },
      {
        word: "LIVER",
        clue: "From CELLS: billions of specialised CELLS make up this vital organ.",
      },
      {
        word: "PULSE",
        clue: "From LIVER: the LIVER needs blood — and blood is driven by this rhythmic beat.",
      },
    ],
  },
];

/**
 * Returns the puzzle for a given UTC date string (YYYY-MM-DD).
 * Uses a fixed epoch so the index is deterministic and predictable.
 */
export function getChainForDate(dateStr) {
  const EPOCH = new Date("2025-01-01T00:00:00Z").getTime();
  const target = new Date(`${dateStr}T00:00:00Z`).getTime();
  const dayIndex = Math.floor((target - EPOCH) / 86400000);
  const idx = ((dayIndex % chains.length) + chains.length) % chains.length;
  return { ...chains[idx], puzzleNumber: dayIndex + 1, index: idx };
}

/**
 * Utility: print the full schedule so you know what lands on which date.
 * Run with: node -e "import('./chains.js').then(m => m.printSchedule(30))"
 */
export function printSchedule(days = 30) {
  const start = new Date("2025-01-01T00:00:00Z");
  for (let i = 0; i < days; i++) {
    const d = new Date(start.getTime() + i * 86400000);
    const dateStr = d.toISOString().slice(0, 10);
    const puzzle = getChainForDate(dateStr);
    const words = puzzle.chain.map((c) => c.word).join(" → ");
    console.log(`${dateStr}  [#${puzzle.index + 1}]  ${words}`);
  }
}
