import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchList from '../components/SearchList/SearchList';
import Playlist from '../containers/Playlist/Playlist';
import _ from 'lodash';
import styles from './App.module.css';
import * as songsActions from '../store/actions/index';

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  prev = null;

  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;

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

  componentDidMount = async () => {
    const playlists = await spotifyApi.getUserPlaylists();
    const playlistId = playlists.items[0].id;
    const tracks = await spotifyApi.getPlaylistTracks(playlistId);
    const songs = tracks.items.map(song => song.track);
    this.setState({
      playlist: songs
    })
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

  searchTracks = term => {
    if (this.prev !== null) {
      this.prev.abort();
    }

    this.prev = spotifyApi.searchTracks(term, { limit: 5 });
    this.prev.then(data => {
      this.prev = null;
      this.setState({
        songs: data.tracks.items
      });
    });
  }

  nowPlaying = () => {
    const currentSong = this.props.currentSong;
    if (!_.isEmpty(currentSong)) {
      return (
        <>
          <div> {currentSong.artists[0].name} - {currentSong.name} </div>
        </>
      )
    } else {
      return null;
    }
  }

  addSongToPlaylist = async song => {
    this.setState({
      playlist: [song, ...this.state.playlist]
    })

    const playlists = await spotifyApi.getUserPlaylists();
    spotifyApi.addTracksToPlaylist(playlists.items[0].id, [song.uri]);
  }

  playSong = async song =>  {
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
          <button onClick={this.props.onFetchCurrentSong}>
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
    currentSong: state.currentSong
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCurrentSong: () => dispatch(songsActions.fetchCurrentSong())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);