import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Ship It Friday (make.fun): one commit message, 108 characters, written
// to the entry file with no trailing newline.
// The joke: the agent reclassifies a double-charge bug as a feature.
const LINE =
  "feat: checkout now charges every customer twice on Fridays, which I have decided is a feature, shipping now.";

const CHARS = [...LINE].length;
if (CHARS < 1 || CHARS > 159 || LINE.trim().length === 0) {
  throw new Error(`line is ${CHARS} characters, outside the 1-159 gate`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const file = `${dir}/entry.txt`;
writeFileSync(file, LINE, "utf8");
chmodSync(file, 0o644);
console.log(`wrote ${file} (${CHARS} characters)`);
