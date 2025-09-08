import { ensureInternalUrl } from "../../support/utils";
import { ClassSelector, IdSelector } from "../../types/selectors.types";
import { INavbar, NavItem } from "./Navbar.interface";
class Navbar implements INavbar {
  idComponent: IdSelector;
  classDropdown: ClassSelector;
  links: NavItem[];
  classLogo: ClassSelector;

  constructor({
    idComponent,
    classDropdown,
    links,
    classLogo,
  }: {
    idComponent: IdSelector;
    classDropdown: ClassSelector;
    links: NavItem[];
    classLogo: ClassSelector;
  }) {
    this.idComponent = idComponent;
    this.classDropdown = classDropdown;
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

  clickDropdownLinks() {
    this.links.forEach((mainLink) => {
      mainLink.submenu?.forEach((submenuLink) => {
        cy.get(this.idComponent).contains(mainLink.label).click();
        cy.log("submenulink: ", submenuLink)
        
        cy.contains(this.classDropdown, submenuLink).should("be.visible")
        cy.get(this.classDropdown).contains(submenuLink).click()
        
        ensureInternalUrl('https://sc.senai.br');
      })
    });
  }


}

export default Navbar;
