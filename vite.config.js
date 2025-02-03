import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures proper routing for SPAs
  server: {
    host: true, // Exposes the network host address
    historyApiFallback: true, // Fixes React Router refresh issues
  },
  build: {
    outDir: "dist", // Default output folder
    assetsDir: "assets", // Keeps assets organized
  },
});
