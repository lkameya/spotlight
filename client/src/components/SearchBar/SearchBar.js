import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import SearchButton from '../Icons/SearchButton/SearchButton';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const onInputChange = (term) => {
    setTerm(term);
    props.handleSearch(term);
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.input}
        value={term}
        placeholder="Search an artist or song ..."
        onChange={event => onInputChange(event.target.value)}
      />
      <SearchButton />
    </div>

  )
}


export default SearchBar;
