export const ensureInternalUrl = (baseUrl: string = 'https://sc.senai.br') => {
  cy.url().then((currentUrl) => {
    if (!currentUrl.startsWith(baseUrl)) {
      cy.visit(baseUrl); 
    } 
  });
};