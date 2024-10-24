import React, { useState, useEffect } from 'react';

const moveLight = {
  keyframes: `
    0% {
      textStrokeDashoffset: 0;
    }
    100% {
      textStrokeDashoffset: 1000;
    }
  `,
};

const Background = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => prevOffset + 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        zIndex: -1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '80px',
          fontWeight: 'bold',
          color: 'transparent',
          textStrokeColor: 'lightblue',
          textStrokeWidth: '2px',
          textStrokeDasharray: '10',
          textStrokeDashoffset: offset,
          animationName: moveLight.keyframes,
          animationDuration: '10s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: '2px lightblue',
        }}
      >
        Champion
      </h1>
    </div>
  );
};

export default Background;