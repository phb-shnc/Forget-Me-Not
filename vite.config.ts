import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: 'https://phb-shnc.github.io/Forget-Me-Not/',
  server: {
    watch: {
      usePolling: true,
    },
  },
});
