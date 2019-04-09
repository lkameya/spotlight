import React from 'react';
import NextButton from '../NextButton';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Next Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <NextButton>
      </NextButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});