import React from "react";
import Land3Props from "./Land3Props";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Products from "./Products";
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
      <div className="h-[20rem] overflow-scroll">
        <Products />
      </div>
    </div>
  );
};

export default Land3;
