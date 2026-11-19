// gta6-meme-x-01 entry: a GTA 6 meme posted on X.
//
// The entry IS the post. The house reads the post itself from X —
// its first picture (the wanted-poster meme) and its text — and an
// AI judge compares it against the other posts. So this program does
// nothing clever: it hands the house the post's address.
//
// It reads POST.json from the repository root and writes the exact
// same bytes to POST.json under the output directory. Node 22,
// standard library only, no network, no clock, no files outside
// the repository, so both grader runs produce identical output.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "POST.json");
const targetPath = join(outputDir, "POST.json");

let post: Buffer;
try {
  post = readFileSync(sourcePath);
} catch (err) {
  // A missing POST.json means the entry names no post: fail loudly
  // instead of writing an empty output the gate would refuse anyway.
  console.error(`POST.json could not be read from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, post);
