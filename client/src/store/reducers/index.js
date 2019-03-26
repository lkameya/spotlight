import { combineReducers } from 'redux';
import songsReducer from './songs';

export default combineReducers({
  currentSong: songsReducer
});