import { memo, useRef } from "react";
import styles from "./video_search.module.css";

const VideoSearch = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  console.log("클릭");
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo"></img>
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        onKeyPress={onKeyPress}
        className={styles.input}
        type="search"
        placeholder="search"
      ></input>
      <button onClick={onClick} className={styles.button} type="submit">
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        ></img>
      </button>
    </header>
  );
});

export default VideoSearch;
