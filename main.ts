import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Copy POST.json from the repository into the output directory.
// No network, no wall clock, no files outside the repository:
// the output bytes are exactly the bytes of POST.json in the repo,
// so two runs always write the same bytes.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const post = readFileSync(join(botDir, "POST.json"));
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), post);
