import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_SONG:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
