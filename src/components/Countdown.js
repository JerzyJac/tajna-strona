import React, { useState, useEffect } from "react";

const Countdown = ({ onFinish }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [count, onFinish]);

  return <div>Proszę czekać {count} sekund...</div>;
};

export default Countdown;
