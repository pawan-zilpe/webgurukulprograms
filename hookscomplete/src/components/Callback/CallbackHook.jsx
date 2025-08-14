import React, { useCallback, useState } from "react";
import Child from "./Child";
import "./CallbackHook.css";


const CallbackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("hi Pawan Zilpe");
  // this is function
  const returnComment = useCallback(() => {
    return data;
  }, [data]);

  return (
    <div>
      CallbackHook
      <hr />
      <Child returnComment={returnComment} />
      <hr />
      <button onClick={() => setData("Webgurukul")}>Change call back</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>Toggle text</p>}
    </div>
  );
};

export default CallbackHook;
