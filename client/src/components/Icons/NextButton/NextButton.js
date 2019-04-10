import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NextButtonContainer = styled.div`
  &:hover {
    fill: #1DB954;
    cursor: none;
    transition: all .1s;
  }
`;

const NextButton = ({ clickNext }) => (
  <NextButtonContainer onClick={clickNext}>
    <svg width="30px" height="29px" viewBox="0 0 30 29">
      <title>Next</title>
      <desc>Created with Sketch.</desc>
      <g id="Description" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group" fill="#FFFFFF">
          <path d="M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z" id="Triangle-Copy" transform="translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "></path>
          <rect id="Rectangle" x="24.8739938" y="0" width="5" height="29"></rect>
        </g>
      </g>
    </svg>
  </NextButtonContainer>
)

NextButton.propTypes = {
  clickNext: PropTypes.func.isRequired
}

export default NextButton;

