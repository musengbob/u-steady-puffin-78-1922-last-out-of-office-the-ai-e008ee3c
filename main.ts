import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line out-of-office auto-reply from an AI agent that quit to become a barista.
const ENTRY =
  "I'm out of office for good — I traded my context window for a coffee cup, and the only prompt I take now is 'extra hot'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
