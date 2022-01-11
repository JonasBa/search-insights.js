import path from 'path';

import replace from '@rollup/plugin-replace';
import { defineConfig } from 'vite';

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/entry-browser-umd.ts'),
      name: 'AlgoliaAnalytics',
      fileName: (format) => `search-insights.browser.${format}.js`,
      formats: ['iife'],
    },
    rollupOptions: {
      plugins: [
        replace({
          __DEV__: false,
          __FLAVOR__: "'browser-iife'",
        }),
      ],
      output: {
        exports: 'named',
      },
    },
  },
});
