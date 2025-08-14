import React, { useEffect, useRef } from "react";

const UseRefHook2 = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      Username: <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRefHook2;
