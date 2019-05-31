import React, { useRef } from "react";
import Section from "./components/Section";

import "./styles.css";
import expression from "./assets/expresions.mp4";

function App() {
  const videoRef = useRef();

  return (
    <div className="App">
      <Section />
    </div>
  );
}

export default App;
