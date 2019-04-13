import { createStore } from 'redux';
import rootReducer from './reducers';
import songs from './songs';

describe('Store', () => {
  it('should handle recipe creation', () => {
    const store = createStore(rootReducer, []);

    expect(store.getState().songs).toEqual(songs(undefined, {}))
  });
});