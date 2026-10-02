import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://felipooon.github.io',
  base: process.env.ASTRO_BASE || '/',
  trailingSlash: 'ignore',
  build: {
    format: 'file'
  }
});
