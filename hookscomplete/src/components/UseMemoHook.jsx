import React, { useEffect, useMemo, useState } from "react";
import { userdata } from "../data";
const UseMemoHook = () => {
  // data store 1001
  const [data, setData] = useState(userdata);
  //   store longest name
  const [toggle, setToggle] = useState(false);

  //function to find longesst name
  const longestName = () => {
    let longname = "";
    for (let i = 0; i < data.length; i++) {
      if (longname.length < data[i].first_name.length) {
        longname = data[i].first_name;
      }
      console.log("i = ", i);
    }
    console.log("Longest name function called");
    return longname;
  };
  // cache the data in the variable.
  const getLongestName = useMemo(() => longestName(), [data]);

  return (
    <div>
      UseMemoHook
      <p>Longest Name : {getLongestName}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>Toggle</p>}
    </div>
  );
};

export default UseMemoHook;
