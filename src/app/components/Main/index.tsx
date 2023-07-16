'use client'

import { ICountry } from '@/app/interfaces/ICountry';
import ListCountryItem from '../ListCountryItem';
import { AppContext } from '@/app/contexts/app.context';
import { useContext } from 'react';
import { IAppContext } from '@/app/interfaces/IAppContext';

export default function Main() {

  const {countriesInitialState, countriesFiltered, searchText}:IAppContext = useContext(AppContext);

  return (
    <main>
        <ul>
          {countriesInitialState.map((country: ICountry) => (
            <ListCountryItem key={country.cca2} country={country} />
          ))}
        </ul>
      </main>
  )
}