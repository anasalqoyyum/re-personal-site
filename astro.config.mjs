import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.anasalqoyyum.dev',
  integrations: [tailwind(), preact(), image(), mdx()],
  markdown: {
    rehypePlugins: ['rehype-slug', 'rehype-autolink-headings', 'rehype-code-titles', 'rehype-prism']
  }
})
