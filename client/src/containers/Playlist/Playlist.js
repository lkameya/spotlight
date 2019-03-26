import React, { Component } from 'react';
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem';
import styles from './Playlist.module.css';

class Playlist extends Component {
  render() {
    return (
      <div className={styles.playlist}>
        {this.props.playlist.map(song => {
          return (
           <PlaylistItem 
            key={song.id} 
            title={song.name} 
            artist={song.artists[0].name}
            albumImg={song.album.images[1].url}
            playNow={this.props.playSong} />
        )
        }
        )}
        
      </div>
    );
  }
}

export default Playlist;
