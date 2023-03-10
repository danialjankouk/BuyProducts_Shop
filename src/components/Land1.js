import React from "react";
import ecommerce from "../assets/ecommerce.png";
import { Link } from "react-router-dom";
const Land1 = () => {
  return (
    <div className="flex md:flex-row flex-col pt-20 container mx-auto justify-center items-center">
      {/* texts */}
      <div className="flex justify-center items-center flex-col">
        <h1 className="dark:text-white text-violet-400 font-bold text-xl md:text-3xl mb-5">
          Shop Easy and Deliver Fast
        </h1>
        <p className="dark:text-white text-violet-400 md:text-2xl mb-5">
          Find Your Favorite Brands
        </p>
        <Link to="/products">
          <button className="bg-violet-400 p-2 rounded-lg text-white font-bold">
            Let's Shop
          </button>
        </Link>
      </div>
      {/* image */}
      <img src={ecommerce} alt="ecommerce" className="w-[50%]" />
    </div>
  );
};

export default Land1;
