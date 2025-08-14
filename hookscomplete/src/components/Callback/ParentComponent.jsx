import React, { useState, useCallback } from "react";
import "./ParentComponent.css";


function ParentComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would be re-created on every render
  // const handleClick = () => {
  //   setCount(prevCount => prevCount + 1);
  // };

  // With useCallback, handleClick is only re-created if 'count' changes (which it doesn't here)
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means it's created once

  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log("ChildComponent rendered"); // This will only log when props change if memoized
  return  <button className="counter-button" onClick={onClick}>Increment</button>;
}


export default ParentComponent;