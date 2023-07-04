import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), auth()],
  output: 'server',
  adapter: vercel(),
  scripts: [
    {
      type: 'module',
      src: 'https://psg.so/web.js',
    },
  ],
});
