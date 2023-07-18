import { Dispatch, SetStateAction } from "react";
import { ICountry } from "./ICountry";

export interface IAppContext {
  countriesInitial: ICountry[];
  countriesFiltered: ICountry[];
  setCountriesFiltered: Dispatch<SetStateAction<ICountry[]>>;
  searchTextContext: string;
  setSearchTextContext: Dispatch<SetStateAction<string>>;
}