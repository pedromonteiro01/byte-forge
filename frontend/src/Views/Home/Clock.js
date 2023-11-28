import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date()); // Initialize state with the current time

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000); // Update the time every second

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date()); // Set new time
  };

  return (
    <div className="clock">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
