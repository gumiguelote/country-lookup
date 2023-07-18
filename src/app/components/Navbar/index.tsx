import SearchInput from "../SearchInput";

import styles from './styles.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h1>CountryLookup</h1>
        <p>Explore Countries and Flags Worldwide</p>
      </div>
      <SearchInput />
    </nav>
  );
}
