import SpotifyWebApi from 'spotify-web-api-js';
import * as actionTypes from './actionTypes';

const spotifyApi = new SpotifyWebApi();

export const setCurrentSong = song => {
  return {
    type: actionTypes.FETCH_CURRENT_SONG,
    payload: song
  }
}

export const fetchCurrentSong = () => {
  return async dispatch => {
    try {
      const response = await spotifyApi.getMyCurrentPlaybackState();
      dispatch(setCurrentSong(response.item));
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error });
    }
  };
}
