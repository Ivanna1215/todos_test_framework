const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  screenshotOnRunFailure: true,
  video: false,
  chromeWebSecurity: false,
  videoUploadOnPasses: false,
  videoCompression: 17,
  experimentalMemoryManagement: true,
  screenshotsFolder: 'cypress/reports/screenshots',
  videosFolder: 'cypress/reports/videos',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    baseUrl: 'https://todomvc.com/examples/react/#/',
  },
});
