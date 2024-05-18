import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["@popperjs/core", "jquery"],
      commonjsOptions: {
        include: /node_modules/,
      },
    },
  },
});
