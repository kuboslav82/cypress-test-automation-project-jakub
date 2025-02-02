const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",  // Tells Cypress to recognize .feature files
    baseUrl: "http://automationexercise.com", // Change to your app's URL

    setupNodeEvents(on, config) {
      // Add Cucumber Preprocessor plugin
      preprocessor.addCucumberPreprocessorPlugin(on, config);

      // Use esbuild bundler for better performance
      on("file:preprocessor", createBundler({ 
        plugins: [createEsbuildPlugin(config)] 
      }));

      return config;
    },
  },
});