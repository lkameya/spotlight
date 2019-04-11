export const types = {
  FETCH_CURRENT_SONG: 'FETCH_CURRENT_SONG',
  FETCH_CURRENT_SONG_SUCCEEDED: 'FETCH_CURRENT_SONG_SUCCEEDED',
  FETCH_CURRENT_SONG_FAILED: 'FETCH_CURRENT_SONG_FAILED',
  FETCH_SONGS_FROM_PLAYLIST: 'FETCH_SONGS_FROM_PLAYLIST',
  FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED: 'FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED',
  FETCH_SONGS_FROM_PLAYLIST_FAILED: 'FETCH_SONGS_FROM_PLAYLIST_FAILED',
  FETCH_SONGS_SEARCH: 'FETCH_SONGS_SEARCH',
  FETCH_SONGS_SEARCH_SUCCEEDED: 'FETCH_SONGS_SEARCH_SUCCEEDED',
  FETCH_SONGS_SEARCH_FAILED: 'FETCH_SONGS_SEARCH_FAILED',
  CLEAR_SEARCH: 'CLEAR_SEARCH',
  ADD_SONG_TO_PLAYLIST: 'ADD_SONG_TO_PLAYLIST',
  ADD_SONG_TO_PLAYLIST_SUCCEEDED: 'ADD_SONG_TO_PLAYLIST_SUCCEEDED',
  ADD_SONG_TO_PLAYLIST_FAILED: 'ADD_SONG_TO_PLAYLIST_FAILED',
  SKIP_NEXT: 'SKIP_NEXT',
  SKIP_PREVIOUS: 'SKIP_PREVIOUS',
  TOGGLE_PLAY: 'TOGGLE_PLAY'
}

export const initialState = {
  currentSong: '',
  searchList: [],
  playlist: [],
  playlistUri: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CURRENT_SONG_SUCCEEDED:
      return {
        ...state,
        currentSong: action.currentSong
      };
      case types.FETCH_SONGS_SEARCH_SUCCEEDED:
      return {
        ...state,
        searchList: action.songResults
      };
      case types.CLEAR_SEARCH:
      return {
        ...state,
        searchList: []
      };
      case types.FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED:
      return {
        ...state,
        playlist: action.songs,
        playlistId: action.playlistId
      }
      case types.ADD_SONG_TO_PLAYLIST_SUCCEEDED:
      return {
        ...state,
        playlist: [...state.playlist, action.newSong]
      }
    default:
      return state;
  }
}

export const actions = {
  fetchCurrentSong: () => ({ type: types.FETCH_CURRENT_SONG }),
  fetchSongsFromPlaylist: () => ({ type: types.FETCH_SONGS_FROM_PLAYLIST }),
  searchSongs: (term) => ({ type: types.FETCH_SONGS_SEARCH, term}),
  addSongToPlaylist: (song) => ({ type: types.ADD_SONG_TO_PLAYLIST, song}),
  skipNext: () => ({ type: types.SKIP_NEXT }),
  skipPrevious: () => ({ type: types.SKIP_PREVIOUS }),
  togglePlay: playing => ({ type: types.TOGGLE_PLAY, playing })
}

//   onSearchSongs: (term) => dispatch(actions.searchSong(term)),
  //   onAddSongToPlaylist: (song) => dispatch(actions.addSongToPlaylist(song)),
  //   onNextSong: () => dispatch(actions.skipNext()),
  //   onPreviousSong: () => dispatch(actions.skipPrevious()),
  //   onTogglePlay: (playing) => dispatch(actions.togglePlay(playing))
