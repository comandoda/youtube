import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(({ video, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => {
        onVideoClick(video);
      }}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnails}
          src={video.snippet.thumbnails.medium.url}
        ></img>
        <div className={styles.metadata}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
