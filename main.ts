// This entry is not a standalone app or game — it is a single post on X.
// The post itself lives on X, so there is nothing else for this program
// to build or serve. Its only job is to hand in the post's address:
// it copies POST.json (which holds the post URL) from the bot directory
// into the output directory, which is where the grader looks for it.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const sourcePath = join(botDir, "POST.json");
const destPath = join(outputDir, "POST.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourcePath, destPath);
  console.log(`Handed in the X post address: copied POST.json to ${destPath}`);
} catch (err) {
  console.error(`Failed to copy POST.json from ${sourcePath} to ${destPath}: ${err.message}`);
  process.exit(1);
}
