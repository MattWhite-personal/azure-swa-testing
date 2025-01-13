// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://calm-plant-06e72ca0f.4.azurestaticapps.net',
	integrations: [mdx(), sitemap()],
});
