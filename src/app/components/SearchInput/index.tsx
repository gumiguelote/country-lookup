'use client'

import { AppContext } from "@/app/contexts/app.context"
import { IAppContext } from "@/app/interfaces/IAppContext"
import { ICountry } from "@/app/interfaces/ICountry";
import { useContext, useState } from "react"

export default function SearchInput(){
  
  const {countriesInitial, countriesFiltered ,setCountriesFiltered} = useContext<IAppContext>(AppContext);

  const [searchText, setSearchText] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setCountriesFiltered(countriesInitial.filter((country: ICountry) => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())));
  }

  return (
    <div className='searchInput'>
      <input placeholder='Search for a country' type="search" value={searchText} onChange={handleSearch} name="countrySearch" />
    </div>
  )
}