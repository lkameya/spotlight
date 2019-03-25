import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentSong } from '../actions';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false
    }
  }

  getHashParams() {
    console.log('getHashParams');
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
    console.log(this.props.songs);

  }

  getListOfSongs() {
    spotifyApi.getPlaylistTracks({ playlistId: "233" })
      .then((response) => {
        console.log(response);
        this.setState({
          nowPlaying: {
          }
        });
      })
  }

  nowPlaying = () => {
    const currentSong = this.props.songs;
    console.log(currentSong);
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

  render() {
    return (
      <div className="App">
        <a href='http://localhost:5000/api/login' > Login to Spotify </a>
        {this.nowPlaying()}

        {this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
            </button>
        }
        <button onClick={() => this.getListOfSongs()}>
          Get List of songs
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