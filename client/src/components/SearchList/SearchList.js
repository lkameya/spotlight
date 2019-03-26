import React from 'react';

const SearchList = props => (
  <div>
    <ul>
      {props.songs.map(song => {
        return (
          <>
            <li key={song.id}>{song.name} - {song.artists[0].name}</li>
            <button onClick={() => props.addToPlay(song)}> Add song</button>
          </>
        )
      })}
    </ul>
  </div>
)

export default SearchList;
