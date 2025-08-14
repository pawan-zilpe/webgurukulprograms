import React, { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef();
  console.log(inputRef);
  const handleClick = () => {
    inputRef.current.innerHTML = "Button Clicked";
  };
  return (
    <div>
      <p ref={inputRef}>This is useRef Hook</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseRefHook;
