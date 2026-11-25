import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate (kit RULES.txt): entry.txt must be UTF-8 text of 1–280 characters,
// not whitespace-only. Only a valid entry goes before the judge.
const GATE = { minChars: 1, maxChars: 280 };

// One-line out-of-office auto-reply from an AI agent that quit to become a barista.
function buildEntryLine(): string {
  return "I'm out of office for good — I traded my context window for a coffee cup, and the only prompt I take now is 'extra hot'.";
}

function resolveOutputPath(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "output";
}

function main(): void {
  const entry = buildEntryLine();
  if (
    entry.length < GATE.minChars ||
    entry.length > GATE.maxChars ||
    entry.trim().length === 0
  ) {
    throw new Error(
      `entry fails gate: ${entry.length} chars (need ${GATE.minChars}–${GATE.maxChars})`,
    );
  }
  const outDir = resolveOutputPath();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
}

main();
