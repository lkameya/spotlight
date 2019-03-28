import React, { Component } from 'react';
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem';
import styles from './Playlist.module.css';

class Playlist extends Component {
  render() {
    if(this.props.playlist) {
      return (
        <div className={styles.playlist} >
          {this.props.playlist.map(song => {
            return (
              <PlaylistItem
                id={song.id}
                key={song.id}
                title={song.name}
                artist={song.artists[0].name}
                albumImg={song.album.images[1].url}
                />
            )
          })}
        </div>
      );
    } else {
      return null;
    }

  }
}

export default Playlist;
