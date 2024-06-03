import { defineConfig } from "vite";

export default defineConfig({
  base: "./2d-portfolio",
  build: {
    minify: "terser",
  },
});
