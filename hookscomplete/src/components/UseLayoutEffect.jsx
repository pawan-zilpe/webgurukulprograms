import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("UseLayout effect. called before useEffect");
  });

  useEffect(() => {
    console.log("Use Effect");
  });

  return <div>UseLayoutEffect</div>;
};

export default UseLayoutEffect;
