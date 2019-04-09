import React from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PlaylistContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  justify-content: center;
  width: 100vw;
  padding: 2vh;
  padding-top: 5vh;
`;

const Playlist = ({ playlist }) => {
  if (playlist) {
    return (
      <PlaylistContainer>
        {
          playlist.map(song => {
            return (
              <PlaylistItem
                id={song.id}
                key={song.id}
                title={song.name}
                artist={song.artists[0].name}
                albumImg={song.album.images[1].url}
              />
            )
          })
        }
      </PlaylistContainer>
    );
  }

  return null;
}

Playlist.propTypes = {
  playlist: PropTypes.array
};

export default Playlist;
