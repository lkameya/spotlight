import configureStore from 'redux-mock-store';

import { actionCreators, initialState, types } from './songs';
import songReducer from './songs';

const mockStore = configureStore();
const store = mockStore();

describe('ACTIONS', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('fetchCurrentSong', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: types.FETCH_CURRENT_SONG
        }
      ];
      store.dispatch(actionCreators.fetchCurrentSong());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('fetchSongsFromPlaylist', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: types.FETCH_SONGS_FROM_PLAYLIST
        }
      ];
      store.dispatch(actionCreators.fetchSongsFromPlaylist());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('searchSongs', () => {
    test('dispatches the correct action and payload', () => {
      const term = 'Example search'
      const expectedActions = [
        {
          type: types.FETCH_SONGS_SEARCH,
          term
        }
      ];
      store.dispatch(actionCreators.searchSongs(term));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('addSongToPlaylist', () => {
    test('dispatches the correct action and payload', () => {
      const song = {};
      const expectedActions = [
        {
          type: types.ADD_SONG_TO_PLAYLIST,
          song
        }
      ];
      store.dispatch(actionCreators.addSongToPlaylist(song));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('skipNext', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: types.SKIP_NEXT,
        }
      ];
      store.dispatch(actionCreators.skipNext());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('skipPrevious', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: types.SKIP_PREVIOUS,
        }
      ];
      store.dispatch(actionCreators.skipPrevious());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('togglePlay', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: types.TOGGLE_PLAY,
        }
      ];
      store.dispatch(actionCreators.togglePlay());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});


describe('REDUCERS', () => {
  describe('song', () => {
    it('should return the initial state', () => {
      expect(songReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_CURRENT_SONG_SUCCEEDED', () => {
      const mockData = {
        currentSong: 'Eminem'
      }
      const successAction = {
        type: types.FETCH_CURRENT_SONG_SUCCEEDED,
        currentSong: 'Eminem'
      };
      expect(songReducer({}, successAction)).toEqual(mockData);
    });

    it('should handle FETCH_SONGS_SEARCH_SUCCEEDED', () => {
      const mockData = {
        searchList: 'Eminem'
      }
      const successAction = {
        type: types.FETCH_SONGS_SEARCH_SUCCEEDED,
        songResults: 'Eminem'
      };
      expect(songReducer({}, successAction)).toEqual(mockData);
    });

  });

});