import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchList from '../components/SearchList/SearchList';
import Playlist from '../components/Playlist/Playlist';
import _ from 'lodash';
import styled from 'styled-components';
import { actionCreators as songsActions } from '../ducks/songs';
import Logo from '../components/Icons/Logo/Logo';
import NextButton from '../components/Icons/NextButton/NextButton';
import PreviousButton from '../components/Icons/PreviousButton/PreviousButton';
import PlayButton from '../components/Icons/PlayButton/PlayButton';
import history from '../history';
import { bindActionCreators } from 'redux';

const spotifyApi = new SpotifyWebApi();

const AppContainer = styled.div`
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: white;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #141919;
`;

const NowPlaying = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  margin: 5rem;
  font-weight: 300;
  font-size: 1.6rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;

const LoginScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: white;
  height: 100vh;
`;

const LoginButton = styled.a`
  margin-top: 5rem;
  font-size: 2rem;
  text-decoration: none;
  background-color: #1db954;
  color: white;
  padding: 1rem 6rem;
  border-radius: 5rem;

  &:hover {
    transform: translateY(-.2rem);
    transition: all .2s;
  }
`;

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

    history.replace('/');
  }

  componentDidMount = () => {
    this.props.fetchSongsFromPlaylist();
    this.timer = setInterval(() => {
      this.props.fetchCurrentSong()
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
    const trackSearch = _.debounce((term) => { this.props.searchSongs(term) }, 500);
    const currentSong = this.props.currentSong;

    if (this.state.loggedIn) {
      return (
        <AppContainer>
          <Logo />
          <SearchBar handleSearch={trackSearch} />
          <SearchList
            songs={this.props.searchList}
            addToPlay={this.props.addSongToPlaylist}
          />
          <Row>
            <NowPlaying>
              {this.nowPlaying()}
            </NowPlaying>
            <Buttons>
              <PreviousButton clickPrevious={this.props.skipPrevious} />
              <PlayButton
                isPlaying={this.state.isPlaying}
                playSong={() => this.props.togglePlay(this.state.isPlaying)}
              />
              <NextButton clickNext={this.props.skipNext} />
            </Buttons>
            <Playlist
              playlist={this.props.playlist}
              currentSong={currentSong || null}
            />
          </Row>
        </AppContainer>
      );
    }

    return (
      <LoginScreen>
        <div>Please make sure you are playing one of your playlists in Spotify on any device</div>
        <LoginButton href="https://sagaplaylist.lkameya.com/api/login">Continue</LoginButton>
      </LoginScreen>
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
  return bindActionCreators({ ...songsActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
