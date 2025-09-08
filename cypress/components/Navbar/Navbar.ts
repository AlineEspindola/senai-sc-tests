import { ClassSelector, IdSelector, TextSelector } from "../../types/selectors.types";
import { INavbar } from "./Navbar.interface";
class Navbar implements INavbar {
  idComponent: IdSelector;
  linksMain: TextSelector[];
  classLogo: ClassSelector;

  constructor({
    idComponent,
    linksMain,
    classLogo,
  }: {
    idComponent: IdSelector;
    linksMain: TextSelector[];
    classLogo: ClassSelector;
  }) {
    this.idComponent = idComponent;
    this.linksMain = linksMain;
    this.classLogo = classLogo;
  }

  checkVisible() {
    cy.get(`${this.idComponent} ${this.classLogo}`).should("be.visible");
    this.linksMain.forEach((link) => {
      cy.contains(this.idComponent, link).should("be.visible");
    });
  }

  openDropdown() {
    this.linksMain.forEach((link) => {
      cy.get(this.idComponent).contains(link).click();
    });
  }
}

export default Navbar;
