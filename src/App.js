import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';

import useVideo from './useVideo';
import happy from './happy.jpg';
import male from './male.jpg';

import './styles.css';

const DrawAtribute = ({ text, value }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center'
      }}
    >
      <h5 style={{ marginRight: '3px' }}>{text}:</h5> {value}
    </div>
  );
};

const getBestExpression = expressions =>
  Object.keys(expressions).reduce((prev, current) =>
    expressions[prev] > expressions[current] ? prev : current
  );

function UseVideoComponent() {
  //const [video, videoStream] = useVideo();
  const [img, callback] = useVideo();
  //<video ref={video} width="300" height="300" />

  useEffect(() => {
    // WE have prediction data
    if (callback !== null) {
      console.log(callback.expressions);
    }
  }, [callback]);

  const override = css``;

  return (
    <div className="imgContainer">
      <section className="picture">
        <img ref={img} width="310" height="310" src={male} alt="" />
      </section>
      {callback !== null ? (
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
          <CircleLoader
            css={override}
            sizeUnit={'px'}
            size={90}
            color={'black'}
            loading={true}
          />
        </section>
      )}
    </div>
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
