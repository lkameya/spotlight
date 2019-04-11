import React from 'react';
import PreviousButton from '../PreviousButton';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Previous Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <PreviousButton>
      </PreviousButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
