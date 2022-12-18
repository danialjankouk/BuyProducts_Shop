import React from "react";
import Land1 from "./Land1";
import Land2 from "./Land2";

const LandPage = () => {
  return (
    <div className="dark:bg-slate-800 flex flex-col justify-center items-center bg-slate-200">
      <Land1 />
      <Land2 />
    </div>
  );
};

export default LandPage;
