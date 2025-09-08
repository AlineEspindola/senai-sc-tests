import { ClassSelector, IdSelector, TextSelector } from "../../types/selectors.types";
import { INavbar, NavItem } from "./Navbar.interface";
class Navbar implements INavbar {
  idComponent: IdSelector;
  links: NavItem[];
  classLogo: ClassSelector;

  constructor({
    idComponent,
    links,
    classLogo,
  }: {
    idComponent: IdSelector;
    links: NavItem[];
    classLogo: ClassSelector;
  }) {
    this.idComponent = idComponent;
    this.links = links;
    this.classLogo = classLogo;
  }

  checkVisible() {
    cy.get(`${this.idComponent} ${this.classLogo}`).should("be.visible");
    this.links.forEach((link) => {
      cy.contains(this.idComponent, link.label).should("be.visible");
    });
  }

  openDropdown() {
    this.links.forEach((link) => {
      cy.get(this.idComponent).contains(link.label).click();
    });
  }
}

export default Navbar;
