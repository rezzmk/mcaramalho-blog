import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	site: "https://cute-biscuit-fb1164.netlify.app/",
	integrations: [
		mdx({}),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		image(),
		sitemap(),
	],
});
