import React, { useEffect, useState } from "react";

const EffectHook = () => {
  // variable
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("username");
  // it render on state change
  useEffect(() => {
    console.log("useEffect called");
  }, [data]);

  return (
    <div>
      EffectHook
      <p>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </p>
      {toggle && <p>Toggle</p>}
      {data}
      <button
        onClick={() => {
          setData("button clicked");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default EffectHook;
