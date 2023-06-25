import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(context) {
  return rss({
    title: "RezZ's blog",
    description: 'Welcome to another one of those tech bro blogs',
    site: 'https://r3zz.io',
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
    stylesheet: 'rss/styles.xsl'
  });
}