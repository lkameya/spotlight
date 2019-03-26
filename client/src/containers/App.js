import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentSong } from '../actions';
import SpotifyWebApi from 'spotify-web-api-js';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchList from '../components/SearchList/SearchList';
import Playlist from '../containers/Playlist/Playlist';
import _ from 'lodash';
import styles from './App.module.css';

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  prev = null;

  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    const user_id = params.user_id;

    console.log(params);

    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      prev: null,
      songs: [],
      playlist: []
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying() {
    this.props.getCurrentSong();
  }

  searchTracks = term => {
    if (this.prev !== null) {
      this.prev.abort();
    }

    this.prev = spotifyApi.searchTracks(term, { limit: 5 });
    this.prev.then(data => {
      this.prev = null;

      console.log(data.tracks);
      this.setState({
        songs: data.tracks.items
      });
    });
  }

  nowPlaying = () => {
    const currentSong = this.props.songs;
    if (currentSong) {
      return (
        <>
          <div> Now Playing: {currentSong.name} </div>
        </>
      )
    } else {
      return null;
    }
  }

  addSongToPlaylist = async song => {
    console.log(song);
    this.setState({
      playlist: [...this.state.playlist, song]
    })

    const playlists = await spotifyApi.getUserPlaylists();
    spotifyApi.addTracksToPlaylist(playlists.items[0].id, [song.uri]);
  }

  playSong = async song =>  {
    console.log(song);
    const playlists = await spotifyApi.getUserPlaylists();
    spotifyApi.addTracksToPlaylist(playlists.items[0].id, [song.uri]);
  }

  getListOfSongs = () => {
    spotifyApi.skipToNext();
  }

  render() {
    const trackSearch = _.debounce((term) => { this.searchTracks(term) }, 500);

    return (
      <div className={styles.app}>
        <SearchBar handleSearch={trackSearch} />
        <SearchList 
          songs={this.state.songs} 
          addToPlay={this.addSongToPlaylist} 
        />
        <Playlist playlist={this.state.playlist} playSong={this.playSong}/>
        <a href='http://localhost:5000/api/login' > Login to Spotify </a>
        {this.nowPlaying()}

        {this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
            </button>
        }
        <button onClick={() => this.getListOfSongs()}>
          Skip next
            </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

export default connect(
  mapStateToProps,
  { getCurrentSong })(App);