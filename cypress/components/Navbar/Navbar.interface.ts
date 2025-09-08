import { TextSelector } from "../../types/selectors.types";
import { IBaseComponent } from "../BaseComponent.Interface";

export interface INavbar extends IBaseComponent {
  links: NavItem[];

  openDropdown(): void;
}

export interface NavItem {
  label: TextSelector;
  submenu?: TextSelector[];
}

export interface NavbarData {
  links: NavItem[];
}

