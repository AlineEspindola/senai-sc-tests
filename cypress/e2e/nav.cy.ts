import Navbar from '../components/Navbar/Navbar';
import linksData from "../fixtures/nav.json"

const navbar = new Navbar({
  idComponent: "#mega-menu",
  linksMain: linksData.linksMain,
  classLogo: ".fsi-nav__logo",
});

describe('Testando Navbar', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  it('Deve mostrar o menu corretamente', () => {
    navbar.checkVisible();
    navbar.openDropdown();
  });
});
