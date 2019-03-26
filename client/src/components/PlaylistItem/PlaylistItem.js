import React from 'react';

const PlaylistItem = props => (
  <>
    <div>{props.title}</div>
    <div>{props.artist}</div>
    <button onClick={props.playNow}>Play</button>
  </>
)

export default PlaylistItem;
