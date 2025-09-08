import { INavbar } from "./Navbar.interface";
import linksData from "../../fixtures/nav.json";

class Navbar implements INavbar {
  idComponent: string = "#mega-menu";
  linksMain: string[] = linksData.linksMain;

  checkVisible() {
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

export default new Navbar();
