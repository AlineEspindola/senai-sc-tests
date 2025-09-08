import Navbar from '../components/Navbar/Navbar';
import linksData from "../fixtures/nav.json"

const navbar = new Navbar({
  idComponent: "#mega-menu",
  links: linksData.links,
  classLogo: ".fsi-nav__logo",
});

describe('Testando Navbar', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  it('[TC-NAV-001] Deve mostrar o Navbar corretamente', () => {
    navbar.checkVisible();
  });

  it('[TC-NAV-002] Deve mostrar o Dropdown corretamente', () => {
    navbar.openDropdown();
  });
});
