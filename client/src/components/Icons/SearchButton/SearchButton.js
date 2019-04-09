import React from 'react';
import { ReactComponent as SearchIcon } from './search.svg';
import styled from 'styled-components';

const SearchButtonWrapper = styled.div`
  margin-left: 10px;
`;

const SearchButton = () => {
  return (
    <SearchButtonWrapper>
      <SearchIcon />
    </SearchButtonWrapper>
  );
}


export default SearchButton;

