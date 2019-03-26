import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export const getCurrentSong = () => async dispatch => {
  try {
    const response = await spotifyApi.getMyCurrentPlaybackState();
    dispatch({ type: 'GET_CURRENT_SONG', payload: response.item });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error});
  }
}
