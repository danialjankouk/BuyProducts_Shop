import React from "react";
import Land3Props from "./Land3Props";
const Land3 = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      {/* title */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-violet-600 font-bold text-2xl md:text-2xl">
          Products
        </h1>
        <hr className="border-2 border-violet-500 w-36"></hr>
      </div>
      {/* components */}
      <div className="grid lg:grid-cols-3 gap-cols-1 gap-28 mt-5">
        <Land3Props />
        <Land3Props />
        <Land3Props />
        <Land3Props />
        <Land3Props />
        <Land3Props />
        <Land3Props />
        <Land3Props />
        <Land3Props />
      </div>
    </div>
  );
};

export default Land3;
