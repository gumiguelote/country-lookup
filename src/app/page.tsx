"use client";
import { ReactNode, useContext } from "react";
import { AppContext } from "@/app/contexts/app.context";

import NavBar from "./components/Navbar";
import ListCountryItem from "./components/ListCountryItem";

import { IAppContext } from "@/app/interfaces/IAppContext";
import { ICountry } from "@/app/interfaces/ICountry";

export default function Home() {
  const contextValues = useContext<IAppContext>(AppContext);

  const generateCountryListWithContextValues = (
    contextValues: IAppContext,
  ): ReactNode => {
    if (contextValues.countriesFiltered.length > 0) {
      return (
        <ul>
          {contextValues.countriesFiltered.map((country: ICountry) => (
            <ListCountryItem key={country.cca2} country={country} />
          ))}
        </ul>
      );
    }

    if (
      contextValues.countriesFiltered.length === 0 &&
      contextValues.searchTextContext !== ""
    ) {
      return <h2>404</h2>;
    }

    return (
      <ul>
        {contextValues.countriesInitial.map((country: ICountry) => (
          <ListCountryItem key={country.cca2} country={country} />
        ))}
      </ul>
    );
  };

  return (
    <>
      <NavBar />
      <main>{generateCountryListWithContextValues(contextValues)}</main>
    </>
  );
}
