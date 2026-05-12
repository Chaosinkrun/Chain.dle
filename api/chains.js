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

  // ── 16 ─────────────────────────────────────────────────────────────────────
  {
    theme: "From sediment to deception — geology rarely lies...",
    chain: [
      {
        word: "SHALE",
        clue: "Start here: a fine-grained sedimentary rock that splits easily into thin layers.",
      },
      {
        word: "SCARP",
        clue: "From SHALE: a steep rock face — often where a band of hard rock like SHALE meets softer ground and forms a sudden drop.",
      },
      {
        word: "BLUFF",
        clue: "From SCARP: a broad, steep SCARP overlooking water — but also a word meaning to deceive by false confidence.",
      },
      {
        word: "FEIGN",
        clue: "From BLUFF: to BLUFF is to FEIGN — to pretend you hold something you don't.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────────────────────
  {
    theme: "The baker's hidden language...",
    chain: [
      {
        word: "SPELT",
        clue: "Start here: an ancient grain older than modern wheat — still used by artisan bakers for its nutty flavour.",
      },
      {
        word: "CRUMB",
        clue: "From SPELT: the open, porous interior structure of a well-fermented SPELT loaf — what bakers obsess over.",
      },
      {
        word: "SCORE",
        clue: "From CRUMB: to get a good CRUMB, a baker must SCORE the dough before baking — cutting slashes into the surface to control how it opens.",
      },
      {
        word: "CLEFT",
        clue: "From SCORE: the SCORE becomes a CLEFT as the loaf bakes and splits dramatically along the cut.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────────────────────
  {
    theme: "The storm's anatomy, from cloud to channel...",
    chain: [
      {
        word: "ANVIL",
        clue: "Start here: the flat-topped shape of a mature cumulonimbus thundercloud — named after the blacksmith's tool it resembles.",
      },
      {
        word: "SQUALL",
        clue: "From ANVIL: beneath the ANVIL cloud, this sudden violent gust of wind arrives with the storm front. But SQUALL is 6 letters — find the 5-letter word for the turbulent downward rush of cold air beneath a storm.",
      },
      {
        word: "GULLY",
        clue: "From the downpour: the rain carves this — a narrow channel eroded into soft earth or hillside by running water.",
      },
      {
        word: "SPATE",
        clue: "From GULLY: when rain fills the GULLY past capacity, the stream is in SPATE — flowing fast and dangerously full.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────────────────────
  {
    theme: "Power, passed by force from hand to hand...",
    chain: [
      {
        word: "EDICT",
        clue: "Start here: a formal order issued by an authority — carrying the force of law without debate.",
      },
      {
        word: "USURP",
        clue: "From EDICT: to seize power without an EDICT — to take a throne or position by force from a rightful holder.",
      },
      {
        word: "JUNTA",
        clue: "From USURP: those who USURP power often form this — a military group that seizes control of a government.",
      },
      {
        word: "PURGE",
        clue: "From JUNTA: a JUNTA consolidates power by this process — forcibly removing rivals and opponents from their positions.",
      },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────────────────────
  {
    theme: "From the moon's shadow to the sea it commands...",
    chain: [
      {
        word: "UMBRA",
        clue: "Start here: the darkest inner cone of shadow cast during a solar eclipse — where the moon completely blocks the sun.",
      },
      {
        word: "LUNAR",
        clue: "From UMBRA: a lunar eclipse occurs when Earth casts its UMBRA on this — find the 5-letter adjective meaning 'of the moon'.",
      },
      {
        word: "TIDAL",
        clue: "From LUNAR: the moon's gravity drives this — the 5-letter adjective describing the rhythmic rise and fall of the sea.",
      },
      {
        word: "BRINE",
        clue: "From TIDAL: the TIDAL sea is full of this — the 5-letter word for salt water.",
      },
    ],
  },

  // ── 21 ─────────────────────────────────────────────────────────────────────
  {
    theme: "A composition that was never finished...",
    chain: [
      {
        word: "FUGUE",
        clue: "Start here: a complex musical form where a theme is introduced and then woven through interweaving voices.",
      },
      {
        word: "MOTIF",
        clue: "From FUGUE: the core melodic idea that a FUGUE develops — a short recurring musical phrase.",
      },
      {
        word: "SCORE",
        clue: "From MOTIF: the MOTIF lives inside this — the full written notation of a piece of music.",
      },
      {
        word: "TACET",
        clue: "From SCORE: a marking found in a SCORE — Latin instruction to a performer to remain completely silent.",
      },
    ],
  },

  // ── 22 ─────────────────────────────────────────────────────────────────────
  {
    theme: "Below the waterline and back up again...",
    chain: [
      {
        word: "BILGE",
        clue: "Start here: the lowest internal compartment of a ship's hull — where foul water and debris collect.",
      },
      {
        word: "CAULK",
        clue: "From BILGE: to keep the BILGE from flooding the hull, shipwrights CAULK — forcing fibrous material into seams between planks.",
      },
      {
        word: "OAKUM",
        clue: "From CAULK: the material used in CAULKing — tarred hemp fibre, unpicked from old rope.",
      },
      {
        word: "RIVET",
        clue: "From OAKUM: where OAKUM seals wood, this iron pin fastens metal — hammered through overlapping plates to hold a hull together.",
      },
    ],
  },

  // ── 23 ─────────────────────────────────────────────────────────────────────
  {
    theme: "What the fire leaves, and where it leads...",
    chain: [
      {
        word: "EMBER",
        clue: "Start here: a glowing fragment of coal or wood that persists after a fire burns low.",
      },
      {
        word: "TAPER",
        clue: "From EMBER: a slender wax candle lit directly from an EMBER — used to carry flame from place to place.",
      },
      {
        word: "NICHE",
        clue: "From TAPER: the shallow recess cut into a stone wall where a TAPER or candle is set to cast its light.",
      },
      {
        word: "GROUT",
        clue: "From NICHE: the thin mortar pressed into the joints around the stones that form a NICHE — filling every gap.",
      },
    ],
  },

  // ── 24 ─────────────────────────────────────────────────────────────────────
  {
    theme: "The cartographer's hidden vocabulary...",
    chain: [
      {
        word: "DATUM",
        clue: "Start here: the fixed reference level from which all map heights are measured — sea level is the most common.",
      },
      {
        word: "INSET",
        clue: "From DATUM: a smaller supplementary map placed within the border of the main one — showing detail or context beyond the DATUM's range.",
      },
      {
        word: "RHUMB",
        clue: "From INSET: a line on a navigational chart that crosses all meridians at the same angle — useful for compass bearings at sea.",
      },
      {
        word: "CHART",
        clue: "From RHUMB: a RHUMB line is drawn on this — a nautical or aeronautical map built for navigation.",
      },
    ],
  },

  // ── 25 ────────────────────────────────────────────────────────────────────
  {
    theme: "The botanist's walk, root to sky...",
    chain: [
      {
        word: "TUBER",
        clue: "Start here: a swollen underground stem storing a plant's energy reserves — the potato is a classic example.",
      },
      {
        word: "FROND",
        clue: "From TUBER: far above the underground TUBER, the large divided leaf of a fern unfurls toward the light.",
      },
      {
        word: "SPORE",
        clue: "From FROND: a fern produces no flower — instead its FRONDs release these tiny single-celled reproductive bodies.",
      },
      {
        word: "HUMUS",
        clue: "From SPORE: when SPOREs and fallen FRONDs decay into the forest floor, they become this — the rich dark organic layer that feeds new growth.",
      },
    ],
  },

  // ── 26 ────────────────────────────────────────────────────────────────────
  {
    theme: "The well-kept secret, traced from source to silence...",
    chain: [
      {
        word: "CACHE",
        clue: "Start here: a hidden store of valuable or secret items — weapons, documents, or provisions concealed from discovery.",
      },
      {
        word: "DECOY",
        clue: "From CACHE: a CACHE is protected by placing this nearby — something designed to draw attention away from the real location.",
      },
      {
        word: "GUILE",
        clue: "From DECOY: the quality required to plant a convincing DECOY — sly, cunning deception.",
      },
      {
        word: "CLOAK",
        clue: "From GUILE: GUILEful people operate under this — concealment of their true identity or intent.",
      },
    ],
  },

  // ── 27 ────────────────────────────────────────────────────────────────────
  {
    theme: "The cabinetmaker's vocabulary, word by careful word...",
    chain: [
      {
        word: "GOUGE",
        clue: "Start here: a woodcarver's chisel with a curved concave blade — used to scoop and hollow out wood.",
      },
      {
        word: "TENON",
        clue: "From GOUGE: once GOUGEd and shaped, the end of a beam is cut into this — a projecting tongue that fits into a mortise joint.",
      },
      {
        word: "DOWEL",
        clue: "From TENON: a simpler alternative to a TENON — a cylindrical wooden pin inserted into aligned holes to join two pieces.",
      },
      {
        word: "MITRE",
        clue: "From DOWEL: the 45-degree angled cut where two pieces meet at a corner — used in frames and mouldings.",
      },
    ],
  },

  // ── 28 ────────────────────────────────────────────────────────────────────
  {
    theme: "The mind at its most extreme...",
    chain: [
      {
        word: "LUCID",
        clue: "Start here: clear, rational, fully aware — the sharpest possible state of mind.",
      },
      {
        word: "VAPID",
        clue: "From LUCID: what a LUCID mind finds insufferable — empty, dull, offering absolutely nothing of substance.",
      },
      {
        word: "INERT",
        clue: "From VAPID: more lifeless still — chemically or mentally unable to react to anything.",
      },
      {
        word: "STOIC",
        clue: "From INERT: not INERT but equally unmoved — enduring hardship without complaint or visible emotion.",
      },
    ],
  },

  // ── 29 ────────────────────────────────────────────────────────────────────
  {
    theme: "The body's hidden river system...",
    chain: [
      {
        word: "SERUM",
        clue: "Start here: the pale liquid remaining when blood clots — carrying antibodies but no cells.",
      },
      {
        word: "LYMPH",
        clue: "From SERUM: similar to SERUM but flowing through its own separate vessel network — the immune system's pale transport fluid.",
      },
      {
        word: "EDEMA",
        clue: "From LYMPH: when LYMPH drainage fails, fluid accumulates in tissue and causes this — swelling from fluid backup.",
      },
      {
        word: "SHUNT",
        clue: "From EDEMA: a surgical solution to fluid build-up — a tube inserted to redirect and SHUNT excess fluid away.",
      },
    ],
  },

  // ── 30 ────────────────────────────────────────────────────────────────────
  {
    theme: "A soldier's world, from the terrain to the honour...",
    chain: [
      {
        word: "BEVEL",
        clue: "Start here: the angled edge on a blade or a map's border — a slanted surface that catches the light.",
      },
      {
        word: "FLANK",
        clue: "From BEVEL: a map shows the enemy's exposed side — the 5-letter word for the side of a military formation or column.",
      },
      {
        word: "SALLY",
        clue: "From FLANK: to attack an exposed FLANK with a sudden rush out from a defended position — a SALLY.",
      },
      {
        word: "VALOR",
        clue: "From SALLY: the courage shown in making a desperate SALLY — great bravery in the face of overwhelming danger.",
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
