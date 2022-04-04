import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoDetail from "./component/video_detail/video_detail";
import VideoList from "./component/video_list/video_list";
import VideoSearch from "./component/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (q) => {
      setSelectedVideo(null);
      youtube
        .search(q) //
        .then((videos) => {
          setVideos(videos);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
