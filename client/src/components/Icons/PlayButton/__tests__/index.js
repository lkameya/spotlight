import React from 'react';
import PlayButton from '../PlayButton';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Play Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <PlayButton>
      </PlayButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
