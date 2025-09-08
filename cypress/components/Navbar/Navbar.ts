import { INavbar } from "./Navbar.interface";
class Navbar implements INavbar {
  idComponent: string;
  linksMain: string[];
  classLogo: string;

  constructor({
    idComponent,
    linksMain,
    classLogo,
  }: {
    idComponent: string;
    linksMain: string[];
    classLogo: string;
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
