import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts', 
    baseUrl: 'https://sc.senai.br/',
    supportFile: "cypress/support/e2e.ts"
  },
});
