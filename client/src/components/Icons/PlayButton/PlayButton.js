import React from 'react';
import styled from 'styled-components';

const PlayButtonContainer = styled.div`
  &:hover {
    fill: #1DB954;
    cursor: pointer;
    transition: all .1s;
  }
`;

const PlayButton = ({ isPlaying, playSong }) => {
  if (!isPlaying) {
    return (
      <PlayButtonContainer onClick={playSong}>
        <svg width="56px" height="56px" viewBox="0 0 56 56" >
          <title>Group 2</title>
          <desc>Created with Sketch.</desc>
          <g id="Description" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group-2">
              <circle id="Oval" stroke="#FFFFFF" strokeWidth="2" cx="28" cy="28" r="27"></circle>
              <path d="M31.9246646,15.5313589 L45.8542333,39.3892467 C46.1524238,39.8999728 45.9801296,40.5557293 45.4694035,40.8539197 C45.3055497,40.9495867 45.1192192,41 44.9294819,41 L17.0703444,41 C16.4789404,41 15.9995127,40.5205723 15.9995127,39.9291683 C15.9995127,39.739431 16.049926,39.5531005 16.145593,39.3892467 L30.0751617,15.5313589 C30.3733522,15.0206328 31.0291086,14.8483386 31.5398348,15.1465291 C31.6991119,15.239524 31.8316697,15.3720817 31.9246646,15.5313589 Z" id="Triangle-Copy" fill="#FFFFFF" transform="translate(31.000000, 28.000000) rotate(-270.000000) translate(-31.000000, -28.000000) "></path>
            </g>
          </g>
        </svg>
      </PlayButtonContainer>
    )
  }

  return (
    <PlayButtonContainer onClick={playSong}>
      <svg width="56px" height="56px" viewBox="0 0 56 56" >
        <title>Group 2</title>
        <desc>Created with Sketch.</desc>
        <g id="Description" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-6">
            <g id="Group-2" stroke="#FFFFFF" strokeWidth="2">
              <circle id="Oval" cx="28" cy="28" r="27"></circle>
            </g>
            <g id="Group-5" transform="translate(20.000000, 14.000000)" fill="#FFFFFF">
              <rect id="Rectangle" x="0" y="0" width="5" height="29"></rect>
              <rect id="Rectangle-Copy" x="10" y="0" width="5" height="29"></rect>
            </g>
          </g>
        </g>
      </svg>
    </PlayButtonContainer>
  )
}

export default PlayButton;
