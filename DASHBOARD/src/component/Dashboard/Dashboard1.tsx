import React from "react";
import { TopBar } from "./TopBar";
import { Grid } from "./Grid";

export const Dashboard1= () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <TopBar />
      <Grid />
    </div>
  );
};
export default Dashboard1;