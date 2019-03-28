import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchList from '../components/SearchList/SearchList';
import Playlist from '../containers/Playlist/Playlist';
import _ from 'lodash';
import styles from './App.module.css';
import * as actions from '../store/actions/index';
import NextButton from '../components/Icons/NextButton/NextButton';
import PreviousButton from '../components/Icons/PreviousButton/PreviousButton';
import PlayButton from '../components/Icons/PlayButton/PlayButton';

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
      loggedIn: token ? true : false,
      isPlaying: true
    }
  }

  componentDidMount = () => {
    this.props.onFetchUserPlaylist();
    this.timer = setInterval(() => {
      this.props.onFetchCurrentSong()
      this.playSong();
    }, 3000);
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

  playSong = async song => {
    const response = await spotifyApi.getMyCurrentPlaybackState();
    if (response.is_playing) {
      this.setState({ isPlaying: true });
    } else {
      this.setState({ isPlaying: false });
    }
  }

  render() {
    const trackSearch = _.debounce((term) => { this.props.onSearchSongs(term) }, 500);
    let currentDiv = null;
    
    if(this.props.currentSong) {
      currentDiv = document.getElementById(this.props.currentSong.id);

      this.props.playlist.map(item => {
        if (item.id !== this.props.currentSong.id) {
          const node = document.getElementById(item.id);
          if (node)
            node.classList.remove(styles.bounce);
        }
        return true;
      });
  
      if(currentDiv)
        currentDiv.classList.add(styles.bounce);
    }

    if (this.state.loggedIn) {
      return (
        <div className={styles.app}>
          <SearchBar handleSearch={trackSearch} />
          <SearchList
            songs={this.props.searchList}
            addToPlay={this.props.onAddSongToPlaylist}
          />
          <div className={styles.row}>
            <div className={styles.nowPlaying}>{this.nowPlaying()}</div>
            <div className={styles.buttons}>
              <PreviousButton clickPrevious={this.props.onPreviousSong} />
              <PlayButton clickPrevious={this.props.onPreviousSong} isPlaying={this.state.isPlaying} playSong={() => this.props.onTogglePlay(this.state.isPlaying)} />
              <NextButton clickNext={this.props.onNextSong} />
            </div>
          </div>
          <Playlist playlist={this.props.playlist} playSong={this.playSong} />
        </div>
      );
    }

    return (
      <div className={styles.loginScreen}>
        <p>Welcome to my custom playlist.
          In order to make this app work properly, you need to create a new playlist in your Spotify Account
          and start playing a song.
        </p>
        <br />
        <div>After listening to your music click on the button below to start using the app.</div>
        <a className={styles.loginButton} href='http://localhost:5000/api/login' > Connect to Spotify </a>
        {/* <a className={styles.loginButton} href='https://quiet-castle-21882.herokuapp.com/api/login' > Connect to Spotify </a> */}
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    currentSong: state.songs.currentSong,
    playlist: state.songs.playlist,
    searchList: state.songs.searchList,
    playlistId: state.songs.playlistId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCurrentSong: () => dispatch(actions.fetchCurrentSong()),
    onFetchUserPlaylist: () => dispatch(actions.fetchSongsFromPlaylist()),
    onSearchSongs: (term) => dispatch(actions.searchSong(term)),
    onAddSongToPlaylist: (song) => dispatch(actions.addSongToPlaylist(song)),
    onNextSong: () => dispatch(actions.skipNext()),
    onPreviousSong: () => dispatch(actions.skipPrevious()),
    onTogglePlay: (playing) => dispatch(actions.togglePlay(playing))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);