import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://felipooon.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  build: {
    format: 'file'
  }
});
