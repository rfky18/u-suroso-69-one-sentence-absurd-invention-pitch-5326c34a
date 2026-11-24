import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence: string =
  "The Bouncer is a self-checkout that, on spotting an unexpected item in the bagging area, sends a tiny bouncer to throw it out, stamp REJECTED on its forehead, and ban it from the store for life.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
