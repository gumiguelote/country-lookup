'use client'
import { useContext, useState } from "react"
import styles from './styles.module.css'

import { AppContext } from "@/app/contexts/app.context"
import { IAppContext } from "@/app/interfaces/IAppContext"

import { ICountry } from "@/app/interfaces/ICountry";

export default function SearchInput(){
  
  const {countriesInitial ,setCountriesFiltered, setSearchTextContext, searchTextContext} = useContext<IAppContext>(AppContext);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTextContext(event.target.value.trimStart());
    setCountriesFiltered(countriesInitial.filter((country: ICountry) => country.name.common.toLowerCase().includes(event.target.value.toLowerCase().trimStart())));
  }

  return (
    <div>
      <input className={styles.searchInput} placeholder='Search for a country' type="search" value={searchTextContext} onChange={handleSearch} name="countrySearch" />
    </div>
  )
}