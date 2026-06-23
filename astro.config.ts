import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

function remarkMermaid() {
	return (tree: any) => {
		function walk(node: any) {
			if (node.type === 'code' && node.lang === 'mermaid') {
				node.type = 'html';
				node.value = `<pre class="mermaid">${node.value}</pre>`;
			}
			if (node.children) {
				node.children.forEach(walk);
			}
		}
		walk(tree);
	};
}

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: false,
		}
	},
	site: "https://r3zz.io",
	integrations: [
		mdx({
			remarkPlugins: [remarkMath, remarkMermaid],
			rehypePlugins: [rehypeKatex]
		}),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		image(),
		sitemap(),
	],
});
