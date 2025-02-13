import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "build", // This makes sure Vite outputs to the 'build' folder
  },

  base: "/react-routing/", // Add this line
  plugins: [react()],
});
