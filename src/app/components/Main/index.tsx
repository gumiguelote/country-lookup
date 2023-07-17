'use client'

import { ICountry } from '@/app/interfaces/ICountry';
import ListCountryItem from '../ListCountryItem';
import { AppContext } from '@/app/contexts/app.context';
import { useContext } from 'react';
import { IAppContext } from '@/app/interfaces/IAppContext';

export default function Main() {

  const {countriesInitial, countriesFiltered, setCountriesFiltered} = useContext<IAppContext>(AppContext);

  return (
    <main>
        <ul>
          {(countriesFiltered.length === 0 ? countriesInitial : countriesFiltered ).map((country: ICountry) => (
            <ListCountryItem key={country.cca2} country={country} />
          ))}
        </ul>
      </main>
  )
}