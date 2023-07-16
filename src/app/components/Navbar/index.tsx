import SearchInput from "../SearchInput";

export default function NavBar(){
  return (
    <nav>
      <h1>Welcome to CountryLookup</h1>
      <p>Explore Countries and Flags Worldwide</p>
      <small><a href='restcountries.com'>Restcountries Api</a></small>
      <SearchInput />
    </nav> 
  )
}