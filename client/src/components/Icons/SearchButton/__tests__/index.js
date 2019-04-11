import React from 'react';
import SearchButton from '../SearchButton';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Search Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SearchButton>
      </SearchButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
