import React, { Component } from 'react';
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem';

class Playlist extends Component {
  render() {
    return (
      <div>
        {this.props.playlist.map(song => 
           <PlaylistItem 
            key={song.id} 
            title={song.name} 
            artist={song.artists[0].name}
            playNow={this.props.playSong} />
        )}
        
      </div>
    );
  }
}

export default Playlist;
