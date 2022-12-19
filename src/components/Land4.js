import React from "react";
import Land4Props from "./Land4Props";
import code from "../assets/code.svg";
const Land4 = () => {
  return (
    <div className="flex mb-5 mt-28 flex-col gap-x-40 lg:flex-row-reverse items-center">
      {/* title */}
      <div className="mb-5">
        <img src={code} alt="code" className="w-48" />
      </div>
      {/* cards */}
      <div className="flex flex-col md:flex-row justify-around gap-y-5 md:gap-x-5">
        <Land4Props number="Project Time" text="20 Days" />
        <Land4Props number="Project Technologies" text="React.js , JavaScript , Django , SQlite" />
        <Land4Props number="Project Process" text="-" />
      </div>
    </div>
  );
};

export default Land4;
