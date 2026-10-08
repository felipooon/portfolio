import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://felip.is-a.dev',
  trailingSlash: 'ignore',
  build: {
    format: 'file'
  }
});
