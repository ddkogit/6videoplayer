import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./components/Menu";
import Video from "./components/Video";
import { useEffect } from "react";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

function App() {
  const [videoLink, setVideLink] = useState(
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
  );

  const sendVideo = (v) => {
    setVideLink(v);
  };


  return (
    <>
      <h1>Project 6: Video Player</h1>

      <Menu videos={videos} sendVideo={sendVideo} />
    <br></br>
      <Video videoLink={videoLink} />
    </>
  );
}

export default App;
