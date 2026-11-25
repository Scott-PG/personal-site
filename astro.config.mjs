// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { unwrapAndTitleImages } from "./plugins/unwrap-images";

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: satteri({
      features: { gfm: false },
      mdastPlugins: [unwrapAndTitleImages],
    }),
  },
});
