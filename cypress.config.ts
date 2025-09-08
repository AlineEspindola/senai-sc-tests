import { defineConfig } from 'cypress';

export default defineConfig({
  video: true, 
  videosFolder: 'cypress/videos', 
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts', 
    baseUrl: 'https://sc.senai.br/',
    supportFile: "cypress/support/e2e.ts"
  },
});
