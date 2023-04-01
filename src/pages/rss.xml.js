import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(context) {
  return rss({
    title: 'Marcos Caramalho Blog',
    description: 'Just a humble trashcan of ideas of learning journeys',
    site: 'https://mcaramalho.com',
    items: await pagesGlobToRssItems(
        import.meta.glob('./posts/*.{md,mdx}'),
    ),
    stylesheet: '/rss/styles.xsl',
    customData: `<language>en-us</language>`,
  });
}