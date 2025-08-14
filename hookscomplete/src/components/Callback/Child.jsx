import React, { useEffect } from "react";
import "./Child.css";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("child component is called");
  }, [returnComment]);
  return <div className="child-container">{returnComment()}</div>;
};

export default Child;
