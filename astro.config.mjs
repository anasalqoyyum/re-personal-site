import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), image(), mdx()]
});