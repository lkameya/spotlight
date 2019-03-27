import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentSong: '',
  searchList: [],
  playlist: [],
  playlistUri: ''
}

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.currentSong
      };
      case actionTypes.FETCH_SONGS_SEARCH:
      return {
        ...state,
        searchList: action.songResults
      };
      case actionTypes.CLEAR_SEARCH:
      return {
        ...state,
        searchList: []
      };
      case actionTypes.FETCH_SONGS_FROM_PLAYLIST:
      return {
        ...state,
        playlist: action.songs,
        playlistId: action.playlistId
      }
      case actionTypes.ADD_SONG_TO_PLAYLIST:
      return {
        ...state,
        playlist: [...state.playlist, action.newSong]
      }
    default:
      return state;
  }
};


