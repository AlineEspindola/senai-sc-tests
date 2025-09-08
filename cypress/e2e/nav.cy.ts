import Navbar from '../components/Navbar/Navbar';

describe('Testando Navbar', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  it('Deve mostrar o menu corretamente', () => {
    Navbar.checkVisible();
    Navbar.openDropdown();
  });
});
