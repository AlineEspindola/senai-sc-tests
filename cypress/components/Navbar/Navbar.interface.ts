import { IBaseComponent } from "../BaseComponent.Interface";

export interface INavbar extends IBaseComponent {
  linksMain: string[];

  openDropdown(): void;
}
