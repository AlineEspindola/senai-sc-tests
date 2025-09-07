describe('Testando Navbar', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  it('Deve mostrar o menu corretamente', () => {
    cy.contains('Institucional').should('be.visible');
  });
});
