"use client";

import { ICountry } from "@/app/interfaces/ICountry";
import ListCountryItem from "../ListCountryItem";
import { AppContext } from "@/app/contexts/app.context";
import { useContext } from "react";
import { IAppContext } from "@/app/interfaces/IAppContext";

export default function Main() {
  const { countriesInitial, countriesFiltered, searchTextContext } =
    useContext<IAppContext>(AppContext);

  if (countriesFiltered.length > 0) {
    return (
      <main>
        <ul>
          {countriesFiltered.map((country: ICountry) => (
            <ListCountryItem key={country.cca2} country={country} />
          ))}
        </ul>
      </main>
    );
  }

  if (countriesFiltered.length === 0 && searchTextContext !== '') {
    return (
      <main>
        <h1>404</h1>
      </main>
    );
  } else {
    return (
      <main>
        <ul>
          {countriesInitial.map((country: ICountry) => (
            <ListCountryItem key={country.cca2} country={country} />
          ))}
        </ul>
      </main>
    );
  }
}
