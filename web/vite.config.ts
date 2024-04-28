import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  plugins: [
    react(),
    istanbul({
      cypress: true,
    }),
  ],
});
