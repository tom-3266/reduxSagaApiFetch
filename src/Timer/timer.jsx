import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Function to start the countdown
  const startCountdown = () => {
    if (isActive) return; // Prevent multiple intervals
    setIsActive(true);
  };

  // Effect to handle interval
  useEffect(() => {
    let interval = null;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            setIsActive(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup interval on component unmount or when timer is inactive
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <div>
      <div>{timer}</div>
      <input
        type="number"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
        min="0"
      />
      <button onClick={startCountdown}>Start Countdown</button>
      <button
        onClick={() => {
          setIsActive(false);
          setTimer(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CountdownTimer;
