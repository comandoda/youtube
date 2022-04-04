import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Youtube from "./service/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App youtube={youtube} />);
// ReactDOM.render(
//   <React.StrictMode>
//     <App youtube={youtube} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

reportWebVitals();
