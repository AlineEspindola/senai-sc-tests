export const ensureInternalUrl = (baseUrl: string = 'https://sc.senai.br') => {
  cy.url().then((currentUrl) => {
    if (!currentUrl.startsWith(baseUrl)) {
      cy.log(`URL externa detectada: ${currentUrl}. Voltando para ${baseUrl}`);
      cy.visit(baseUrl); 
    } else {
      cy.log(`URL interna ok: ${currentUrl}`);
    }
  });
};