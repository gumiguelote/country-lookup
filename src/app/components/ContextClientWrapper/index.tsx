'use client'
import { AppContext } from "@/app/contexts/app.context";
import { IAppContext } from "@/app/interfaces/IAppContext";
import { ICountry } from "@/app/interfaces/ICountry";
import { ReactNode, useState } from "react";

interface ContextClientWrapperProps {
  children?: ReactNode;
  countriesInitial: ICountry[];
}

export default function ContextClientWrapper({children, countriesInitial}: ContextClientWrapperProps){
  const [countriesFiltered, setCountriesFiltered] = useState<ICountry[]>([]);

  return (
    <AppContext.Provider value={{countriesInitial ,countriesFiltered, setCountriesFiltered}}>
      {children}
    </AppContext.Provider>
  )

}