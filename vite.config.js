import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        caseStudies: './case-studies.html',
        rapidoWaiting: './rapido-waiting-charges.html',
        swiggyFoodDiscovery: './swiggy-food-discovery.html',
      }
    },
    copyPublicDir: true
  },
  publicDir: 'public'
});
