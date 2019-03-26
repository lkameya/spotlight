import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const onInputChange = (term) => {
    setTerm(term);
    props.handleSearch(term);
  }

  return (
    <input
      type="text"
      className={styles.input}
      value={term}
      placeholder="Search a song"
      onChange={event => onInputChange(event.target.value)}
    />
  )
}


export default SearchBar;
