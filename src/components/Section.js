import React, { useState, useEffect } from "react";

import useVideo from "../hooks/useVideo";
import DrawAtribute from "./DrawAtribute";

import { CircleLoader } from "react-spinners";
import { css } from "@emotion/core";

import happy from "../assets/happy.jpg";
import video from "../assets/expresions.mp4";
import sad from "../assets/sad.jpg";
import male from "../assets/male.jpg";

const getBestExpression = expressions =>
  Object.keys(expressions).reduce((prev, current) =>
    expressions[prev] > expressions[current] ? prev : current
  );

const Section = ({ Element }) => {
  //const [video, videoStream] = useVideo();
  const [elementRef, callback] = useVideo();
  //<video ref={video} width="300" height="300" />

  useEffect(() => {
    // WE have prediction data
    if (callback !== undefined) {
      console.log(callback);
    }
  }, [callback]);

  const override = css``;

  return (
    <div className="imgContainer">
      <section className="picture">
        {Element}
        {/* <img ref={elementRef} width="310" height="310" src={sad} alt="" /> */}
        <video
          ref={elementRef}
          src={video}
          width="310"
          height="310"
          autoPlay
          muted
        />
      </section>
      {callback !== undefined ? (
        <section className="atributes">
          <DrawAtribute text="Age" value={callback.age} />
          <DrawAtribute text="Gender" value={callback.gender} />
          <DrawAtribute
            text="Gender"
            value={getBestExpression(callback.expressions)}
          />
        </section>
      ) : (
        <section className="loadingModel">
          {/* <CircleLoader
            css={override}
            sizeUnit={"px"}
            size={90}
            color={"white"}
            loading={true}
          /> */}
          <p>Prediciendo...</p>
        </section>
      )}
    </div>
  );
};

export default Section;
