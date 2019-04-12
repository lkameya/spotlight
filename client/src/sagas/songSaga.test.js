import { testSaga } from 'redux-saga-test-plan';
import { fetchSong, fetchSongsFromPlaylist, spotifyApi } from './songSaga';
import { types as songTypes } from '../ducks/songs';

const responseSuccess = {
  response: {
    item: 'dddd'
  }
}
describe('SAGAS', () => {
  describe('fetchSong', () => {
    it('dispatch the current song when fetch succeed', () => {
      testSaga(fetchSong)
        .next()
        .call(spotifyApi.getMyCurrentPlaybackState)
        .next(responseSuccess)
        .put({ type: songTypes.FETCH_CURRENT_SONG_SUCCEEDED, currentSong: responseSuccess.item })
        .next()
        .isDone();
    });

    it('dispatch an error message when fetch fails', () => {
      const error = new Error('error');
      testSaga(fetchSong)
        .next()
        .call(spotifyApi.getMyCurrentPlaybackState)
        .throw(error)
        .put({ type: songTypes.FETCH_CURRENT_SONG_FAILED, message: 'error' })
        .next()
        .isDone();
    });
  });

  // describe('fetchSongsFromPlaylist', () => {
  //   it('dispatch a list of songs when fetch succeed', () => {
  //     const songs = [{
  //       album: {
  //         artists: [{
  //           uri: 'teste'
  //         }]
  //       }
  //     }];
  //     const playlistId = 1;
  //     testSaga(fetchSongsFromPlaylist)
  //       .next()
  //       .call(spotifyApi.getMyCurrentPlayingTrack)
  //       .next(playlistId)
  //       .call(spotifyApi.getPlaylistTracks)
  //       .next(songs, playlistId)
  //       .put({ type: songTypes.FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED, songs, playlistId })
  //       .next()
  //       .isDone();
  //   });

  // it('dispatch an error message when fetch fails', () => {
  //   const error = new Error('error');
  //   testSaga(fetchSongsFromPlaylist)
  //     .next()
  //     .call(spotifyApi.getMyCurrentPlaybackState)
  //     .throw(error)
  //     .put({ type: songTypes.FETCH_CURRENT_SONG_FAILED, message: 'error' })
  //     .next()
  //     .isDone();
  //});
  //});
});