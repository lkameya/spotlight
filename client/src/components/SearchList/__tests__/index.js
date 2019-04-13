import React from 'react';
import SearchList from '../SearchList';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const mock = {
  addToPlay: () => '',
  songs: [{
    id: '1',
    album: {
      images: [{},
      {
        url: 'Teste'
      }]
    },
    artists: [
      {
        name: 'SOAD'
      }
    ]
  }]
}

describe('Search List', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SearchList {...mock}>
      </SearchList>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});