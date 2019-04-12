import configureStore from 'redux-mock-store';

import { actionCreators, initialState } from './songs';
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
          type: 'FETCH_CURRENT_SONG'
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
          type: 'FETCH_SONGS_FROM_PLAYLIST'
        }
      ];
      store.dispatch(actionCreators.fetchSongsFromPlaylist());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


describe('REDUCERS', () => {
  describe('song', () => {
    it('should return the initial state', () => {
      expect(songReducer(undefined, {})).toEqual(initialState);
    });
  });

});