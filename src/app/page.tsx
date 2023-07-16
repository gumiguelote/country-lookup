import styles from './page.module.css'
import ListCountryItem from './components/ListCountryItem';

import { getAllCountries } from './service/api.service';
import { ICountry } from './interfaces/ICountry';

export default async function Home() {

  const allCountriesCache: ICountry[] = await getAllCountries();

  return (
    <>
      <nav>
        <h1>Welcome to CountryLookup</h1>
        <p>Explore Countries and Flags Worldwide</p>
        <small><a href='restcountries.com'>Restcountries Api</a></small>
        <div className='searchInput'>
          <input placeholder='Search for a country' type="search" name="countrySearch" />
        </div>
      </nav> 
      <main className={styles.main}>
        <ul>
          {allCountriesCache.map((country: any) => (
           <ListCountryItem key={country.code} country={country} />
          ))}
        </ul>
      </main>
    </>
  )
}
