import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(0);
  };

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime()}</h2>
      <button
        onClick={startTimer}
        style={{ backgroundColor: 'red', color: 'white', margin: '5px', padding: '10px 20px' }}
      >
        Start
      </button>
      <button
        onClick={pauseTimer}
        style={{ backgroundColor: 'blue', color: 'white', margin: '5px', padding: '10px 20px' }}
      >
        Pause
      </button>
      <button
        onClick={resetTimer}
        style={{ backgroundColor: 'green', color: 'white', margin: '5px', padding: '10px 20px' }}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;