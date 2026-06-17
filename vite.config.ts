import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // Matches the "@/*" path alias defined in tsconfig.app.json
      "@": resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        // Vite 8 / Rolldown requires manualChunks as a function
        manualChunks(id: string) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "vendor-react"
          }
          if (id.includes("node_modules/@chakra-ui/") || id.includes("node_modules/@emotion/")) {
            return "vendor-chakra"
          }
          if (id.includes("node_modules/react-icons/")) {
            return "vendor-icons"
          }
          if (
            id.includes("node_modules/next-themes/") ||
            id.includes("node_modules/@formspree/")
          ) {
            return "vendor-misc"
          }
        },
      },
    },
  },

  // Only VITE_* prefixed vars are exposed to the client bundle
  envPrefix: "VITE_",
})
