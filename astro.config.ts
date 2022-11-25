import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: false,
		}
	},
	site: "https://mcaramalho.com",
	integrations: [
		mdx({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex]
		}),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		image(),
		sitemap(),
	],
});
