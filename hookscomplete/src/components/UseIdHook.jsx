import React, { useId, useState } from "react";

const UseIdHook = () => {
  const id1 = useId();
  const [data, setData] = useState([
    {
      id: 1,
      first_name: "Gabie",
      last_name: "Patshull",
      email: "gpatshull0@themeforest.net",
      gender: "Female",
      ip_address: "130.215.243.207",
    },
    {
      id: 2,
      first_name: "Herc",
      last_name: "Krout",
      email: "hkrout1@sbwire.com",
      gender: "Male",
      ip_address: "63.130.176.32",
    },
    {
      id: 3,
      first_name: "Christiano",
      last_name: "Beceril",
      email: "cbeceril2@usa.gov",
      gender: "Male",
      ip_address: "93.122.185.123",
    },
    {
      id: 4,
      first_name: "Randall",
      last_name: "Benck",
      email: "rbenck3@msu.edu",
      gender: "Male",
      ip_address: "90.236.189.96",
    },
  ]);
  console.log(data);
  return (
    <div>
      UseIdHook
      {data.length > 0 &&
        data.map((item, index) => {
          console.log(id1 + index);

          return <p key={id1 + index}>{item.first_name}</p>;
        })}
    </div>
  );
};

export default UseIdHook;
