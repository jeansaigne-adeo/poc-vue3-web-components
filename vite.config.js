import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags starting with 'pc-configurator' as custom elements
          isCustomElement: (tag) => tag.startsWith("pc-"),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          "./node_modules/@mozaic-ds/styles/",
          "./node_modules/@mozaic-ds/styles/settings-tools/",
          "./node_modules/@mozaic-ds/styles/typography/",
          "./node_modules/@mozaic-ds/styles/layout/",
          "./node_modules/@mozaic-ds/styles/utilities/",
          "./node_modules/@mozaic-ds/styles/components/",
          "./node_modules/@mozaic-ds/tokens/build/scss/",
          "./node_modules/",
        ],
      },
    },
  },
});
