import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="counter">
      Counter: {counter}
      <p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </p>
    </div>
  );
};
