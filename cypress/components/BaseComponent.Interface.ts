import { IdSelector } from "../types/selectors.types";

export interface IBaseComponent {
  idComponent: IdSelector;
  
  checkVisible(): void;
}
