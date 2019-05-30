import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useVideo from "./useVideo";
import happy from "./happy.jpg";

import "./styles.css";

function useLoading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(false), []);
  return loading;
}

function UseVideoComponent() {
  const [video, videoStream] = useVideo();
  const [img, imgStream] = useVideo();
  //<video ref={video} width="300" height="300" />

  return (
    <>
      <img ref={img} width="300" height="300" src={happy} alt="" hidden />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => setLoading(false), []);

  return (
    <div className="App">
      <UseVideoComponent />
    </div>
  );
}

export default App;
