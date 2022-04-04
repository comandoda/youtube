import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="100%"
      title="youtube video player"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h1>{video.snippet.title}</h1>
    <h2>{video.snippet.channelTitle}</h2>
    <pre className={styles.description}>{video.snippet.description}</pre>
  </section>
);

export default VideoDetail;
