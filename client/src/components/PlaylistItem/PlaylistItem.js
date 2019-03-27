import React from 'react';
import styles from './PlaylistItem.module.css';

const PlaylistItem = props => (
  <>
    <div className={styles.albumImage} id={props.id}>
      <img src={props.albumImg} alt="albumimg" className={styles.albumImage} height={100}/>
    </div>
  </>
)

export default PlaylistItem;
