import React from 'react';
import Playlist from '../Playlist';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Playlist', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Playlist>
      </Playlist>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
