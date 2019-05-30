import React from "react";
import useVideo from "./useVideo";
import happy from "./happy.jpg";

import "./styles.css";

function UseVideoComponent() {
  //const [video, videoStream] = useVideo();
  const [img, callback] = useVideo();
  //<video ref={video} width="300" height="300" />

  return (
    <>
      {callback}
      <img ref={img} width="300" height="300" src={happy} alt="" hidden />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <UseVideoComponent />
    </div>
  );
}

export default App;
