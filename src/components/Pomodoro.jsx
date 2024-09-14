import React, { useState, useEffect } from 'react';

function Pomodoro() {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [onBreak, setOnBreak] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
    setOnBreak(false); // Resume normal work time
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(25 * 60);
    setIsRunning(false);
    setOnBreak(false);
  };

  const handleBreak = () => {
    setTime(breakTime);
    setIsRunning(true);
    setOnBreak(true); // Mark that the user is on break
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let intervalId;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && !onBreak) {
      handleBreak(); // Automatically start the break when work time reaches 0
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time, onBreak]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="backdrop-blur-md bg-white/30 shadow-lg rounded-lg p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Pomodoro Timer</h1>
        <div className="flex space-x-4 mb-4">
          <button
            className="bg-pink-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
            onClick={handlePause}
          >
            Pause
          </button>
          <button
            className="bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleBreak}
          >
            Break (5 mins)
          </button>
        </div>
        <div className="text-5xl font-bold">{formatTime(time)}</div>
        {onBreak && <p className="mt-4 text-lg text-green-600">Break Time!</p>}
      </div>
    </div>
  );
}

export default Pomodoro;
