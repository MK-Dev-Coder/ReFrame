import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

/* Two build modes:
   - default:      normal Vite build for hosting (dist/)
   - standalone:   everything inlined into ONE index.html that can be
                   double-clicked and opened straight from disk (dist-standalone/) */
export default defineConfig(({ mode }) => {
  const standalone = mode === "standalone";
  const env = loadEnv(mode, process.cwd(), "");
  const githubPages = mode === "github" || env.VITE_GITHUB_PAGES === "1";
  return {
    plugins: standalone ? [react(), viteSingleFile()] : [react()],
    base: standalone || githubPages ? "./" : "/",
    build: { outDir: standalone ? "dist-standalone" : "dist" },
  };
});
