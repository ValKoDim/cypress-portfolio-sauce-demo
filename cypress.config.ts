import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://sauce-demo.myshopify.com/",
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    screenshotOnRunFailure: true,
  },
});
