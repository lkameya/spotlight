import React from 'react';
import styled from 'styled-components';

const SearchListContainer = styled.div`
  height: 25vh;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 1.2rem;
  margin-top: 5rem;

  @media only screen and (max-width: 37.5em) {  
    flex-wrap: wrap;
  }
`;

const Song = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15rem;
  text-align: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: .2s all;
  }

  &:active {
    transform: translateY(-1rem);
  }
`;

const Image = styled.img`
  border-radius: 15rem;
  margin-bottom: .5rem;
  height: 8rem;

  @media only screen and (max-width: 37.5em) {  
    height: 6rem;
  }
`;

const ListItem = styled.li`
  margin: 1rem .5rem;
`;

const SearchList = ({ songs, addToPlay }) => (
  <SearchListContainer>
    <List>
      {
        songs.map(song => {
          return (
            <Song onClick={() => addToPlay(song)}>
              <Image
                src={song.album.images[1].url}
                alt="albumimg"
              />
              <ListItem key={song.id}>
                {song.name} - {song.artists[0].name}
              </ListItem>
            </Song>
          );
        })
      }
    </List>
  </SearchListContainer>
)

export default SearchList;
