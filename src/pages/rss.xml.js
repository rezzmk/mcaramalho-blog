import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(context) {
  return rss({
    title: 'Marcos Caramalho blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: 'https://mcaramalho.com',
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
    stylesheet: 'rss/styles.xsl'
  });
}