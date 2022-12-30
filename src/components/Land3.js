import React from "react";
import Land3Props from "./Land3Props";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
const Land3 = () => {
  return (
    <div className="mt-20 flex flex-col ">
      {/* title */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-violet-600 font-bold text-2xl md:text-2xl">
          Products
        </h1>
        <hr className="border-2 border-violet-500 w-36"></hr>
      </div>
      {/* see more */}
      <div className="flex items-center gap-1 dark:text-violet-400 text-violet-400 font-bold justify-start cursor-pointer">
        <AiOutlineArrowLeft />
        <Link to="/products">
          <h1>See More</h1>
        </Link>
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
