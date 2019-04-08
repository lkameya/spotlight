import React from 'react';
import styled from 'styled-components';

const PlaylistItemWrapper = styled.div`
  position: relative;
`;

// const LabelTrack = styled.span`
//   opacity: 0;
//   font-size: 1.2rem;
//   font-weight: 300;
//   position: absolute;
//   top: -.5rem;
//   left: 5%;
//   transform: translateX(-50%);
// `;

// const AlbumImageWrapper = styled.div`
//   &:hover + ${LabelTrack} {
//     opacity: 1;
//     position: absolute;
//     top: -1rem;
//     left: 50%;
//     transform: translate(-50%);
//     transition: all .2s;
//   }
// `;

// const AlbumImage = styled.img`
//   border-radius: 10rem;
//   margin: 1rem .5rem;
//   height: 10rem;
// `;

const PlaylistItem = ({ id, albumImg, artist, title }) => {
  return (
    <PlaylistItemWrapper>
      {/* <AlbumImageWrapper id={id}>
        <AlbumImage src={albumImg} alt="albumimg" />
      </AlbumImageWrapper> */}
      {/* <LabelTrack> {artist} - {title} </LabelTrack> */}
    </PlaylistItemWrapper>
  )
};

export default PlaylistItem;
