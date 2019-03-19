export default (state = [], action) => {

  switch (action.type) {
    case 'GET_CURRENT_SONG':
      return action.payload;
    default:
      return state;
  }
}