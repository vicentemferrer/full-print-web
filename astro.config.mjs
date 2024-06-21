import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://vicentemferrer.github.io/',
  base: 'full-print-web',
  integrations: [react()]
});