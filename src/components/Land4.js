import React from "react";
import Land4Props from "./Land4Props";

const Land4 = () => {
  return (
    <div className="flex mb-5 mt-28 flex-col gap-x-40 lg:flex-row-reverse items-center">
      {/* title */}
      <div>
        <h1 className="text-violet-500 text-xl mb-5 lg:mb-0 font-bold">
          Rates make us Proud
        </h1>
        <hr className="border-2 border-violet-500"></hr>
      </div>
      {/* cards */}
      <div className="flex flex-col md:flex-row justify-around gap-y-5 md:gap-x-5">
        <Land4Props number="+ 5" text="Years of Activity"/>
        <Land4Props number="+ 97%" text="Customer Satisfaction"/>
        <Land4Props number="+ 5" text="Experience"/>
      </div>
    </div>
  );
};

export default Land4;
