import React from 'react';
import styles from './SearchList.module.css';

const SearchList = props => (
  <div className={styles.searchList}>
    <ul className={styles.list}>
      {props.songs.map(song => {
        return (
          <div className={styles.track} onClick={() => props.addToPlay(song)}>
            <img src={song.album.images[1].url} alt="albumimg" className={styles.albumImage} height={70} />
            <li
              className={styles.listItem}
              key={song.id}
            >{song.name} - {song.artists[0].name}
            </li>
          </div>
        )
      })}
    </ul>
  </div>
)

export default SearchList;
