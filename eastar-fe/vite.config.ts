import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: "@commons",
        replacement: path.resolve(__dirname, "src/@commons"),
      },
      { find: "@domains", replacement: path.resolve(__dirname, "src/domains") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
    ],
  },
});
