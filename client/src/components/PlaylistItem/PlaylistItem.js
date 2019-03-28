import React from 'react';
import styles from './PlaylistItem.module.css';

const PlaylistItem = props => (
  <div className={styles.playlistItem}>
    <div className={styles.albumImage} id={props.id}>
      <img src={props.albumImg} alt="albumimg" className={styles.albumImage}/>
    </div>
    <span className={styles.labelTrack}>{props.artist} - {props.title}</span>
  </div>
)

export default PlaylistItem;
