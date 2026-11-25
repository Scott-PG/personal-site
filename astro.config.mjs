// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { unwrapImages } from "./plugins/image-unwrap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: satteri({
      features: { gfm: false },
      mdastPlugins: [unwrapImages],
    }),
  },
});
