import React from 'react';
import styles from './PlaylistItem.module.css';

const PlaylistItem = props => (
  <>
    <div className={styles.albumImage}>
      <img src={props.albumImg} alt="albumimg" className={styles.albumImage} height={100}/>
    </div>
    <div>{props.title}</div>
    <div>{props.artist}</div>
    {/* <button onClick={props.playNow}>Play</button> */}
  </>
)

export default PlaylistItem;
