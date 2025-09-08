import { TextSelector } from "../../types/selectors.types";
import { IBaseComponent } from "../BaseComponent.Interface";

export interface INavbar extends IBaseComponent {
  linksMain: TextSelector[];

  openDropdown(): void;
}
