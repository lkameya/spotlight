import React from 'react';
import SearchBar from '../SearchBar';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Search Bar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SearchBar>
      </SearchBar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});