import { ICountry } from "./ICountry";

export interface IAppContext {
  searchText?: string;
  countriesFiltered?: ICountry[] | null;
  countriesInitialState: ICountry[];
  setCountriesFiltered?: () => {};
}