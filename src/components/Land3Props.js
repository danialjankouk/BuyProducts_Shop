import React from "react";
import iphone from "../assets/iphone.png";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Land3Props = () => {
  return (
    <>
      <Link to="/products/detail">
        <div className="flex flex-col px-10 bg-slate-300 dark:bg-slate-600 shadow-lg rounded-lg hover:cursor-pointer">
          {/* describe */}
          <div className="flex flex-col justify-around">
            <img src={iphone} alt="iphone" className="w-52" />
            {/* title */}
            <h1 className="dark:text-white font-bold text-violet-500">
              Iphone 13 Pro Max
            </h1>
            {/* star */}
            <div className="flex items-center gap-x-2 mt-2">
              <AiFillStar className="text-yellow-400" />
              <p className="dark:text-white text-violet-500">4.5</p>
            </div>
            {/* price & button*/}
            <div className="flex flex-row justify-between px-2 mt-2 mb-2">
              <p className="dark:text-white text-violet-500 font-bold">
                1200 $
              </p>
              <button className="bg-violet-400 w-16 rounded-md text-white hover:w-24 transition-all">
                Buy
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Land3Props;
