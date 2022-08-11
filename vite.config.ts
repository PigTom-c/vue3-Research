import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  server: {
    port: 3022,
    open: true,
    host: true,
  },
});
