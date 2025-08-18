import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ No /repo-name base needed since you're using a custom domain
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
