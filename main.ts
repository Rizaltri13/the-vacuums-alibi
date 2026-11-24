// The Vacuum's Alibi — make.fun bounty
// u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
//
// One line, at most 200 characters, in which a robot vacuum explains why
// it missed a spot. The program writes that line, deterministically, to
// <output dir>/entry.txt (MAKEFUN_OUTPUT_DIR, default /output).
//
// The line was chosen against the published judge brief, in order:
//   1. a funny one-line excuse for missing a spot
//   2. a joke that lands, not a cute observation about dust
//   3. deadpan machine voice, smug about its sensors and battery
//   4. surprise: a specific, unexpected detail (a squatter with a lease)
//   5. tight, with the punch at the end
//
// Candidates considered (see README.md):
//   - tenure / HR complaint  -> punch ("It stays.") too flat
//   - wildlife / nature reserve -> punch ("My battery thanks me.") too weak
//   - squatter with a lease -> chosen: bureaucratic absurdity, sensor
//     report framing, battery smugness, and a kicker that renews in spring.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sensor report: the spot is a squatter with a lease. I do not evict tenants on 12% battery. The lease renews in spring.";

// The gate refuses anything over 200 characters, anything that is only
// whitespace, and anything that is not one line — fail loudly instead of
// writing a doomed entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || /[\r\n]/.test(LINE)) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
console.log(LINE);
