import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence: string =
  "The PeekStick is a USB stick with a tiny periscope that checks which way the port faces first, so you never plug it in upside down three times in a row.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
