const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://52.58.44.98:8090',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    adminUrl: 'http://52.58.44.98:8080',
  },
});
