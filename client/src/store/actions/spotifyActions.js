import SpotifyWebApi from 'spotify-web-api-js';
import * as actionTypes from './actionTypes';

const spotifyApi = new SpotifyWebApi();

export const setCurrentSong = song => {
  return {
    type: actionTypes.FETCH_CURRENT_SONG,
    currentSong: song
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

export const fetchSongsFromPlaylist = () => {
  return async dispatch => {
    try{
      const playlists = await spotifyApi.getUserPlaylists();
      const playlistId = playlists.items[0].id;
      const tracks = await spotifyApi.getPlaylistTracks(playlistId);
      const songs = tracks.items.map(song => song.track);

      dispatch({ type:  actionTypes.FETCH_SONGS_FROM_PLAYLIST, songs, playlistId });
    } catch(error) {  
      dispatch({ type: 'FETCH_ERROR', error });
    }
  }
}

export const searchSong = term => {
  return async dispatch => {
    if(term !== '') {
      const result = await spotifyApi.searchTracks(term, { limit: 5 });
      dispatch({ type: actionTypes.FETCH_SONGS_SEARCH, songResults: result.tracks.items });
    } else {
      dispatch({ type: actionTypes.CLEAR_SEARCH });
    }
  }
}

export const addSongToPlaylist = song => {
  return async dispatch => {
    const playlists = await spotifyApi.getUserPlaylists();
    spotifyApi.addTracksToPlaylist(playlists.items[0].id, [song.uri]);
    dispatch({ type: actionTypes.ADD_SONG_TO_PLAYLIST, newSong: song });
  }
}

export const skipNext = () => {
  return async dispatch => {
    spotifyApi.skipToNext();
  }
}

export const skipPrevious = () => {
  return async dispatch => {
    spotifyApi.skipToPrevious();
  }
}



