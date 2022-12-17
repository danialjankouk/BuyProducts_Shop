import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({theme , setTheme}) => {
  return (
    <div className={`dark:bg-slate-800 relative bg-slate-200 w-full dark:shadow-violet-400 shadow-md`}>
      <nav className="flex flex-row h-16 dark:text-white text-black items-center justify-between px-2">
        <ul className="flex w-52 justify-around">
          <li className="cursor-pointer hover:underline hover:underline-offset-8 hover:translate-y-1 hover:transition-all">Home</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-8 hover:translate-y-1 hover:transition-all">Products</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-8 hover:translate-y-1 hover:transition-all">Contact Us</li>
        </ul>
        <ul className="flex w-40 text-2xl justify-around">
          <li className="cursor-pointer dark:text-violet-400 text-slate-600" onClick={()=>setTheme(!theme)}>
            {theme ? <MdDarkMode /> : <BsFillSunFill />}
          </li>
          <li className="cursor-pointer dark:text-violet-400 text-slate-600">
            <HiUserCircle />
          </li>
          <div className="flex">
            <li className="cursor-pointer dark:text-violet-400 text-slate-600">
              <FaShoppingCart />
            </li>
            <span className="absolute bg-slate-400 top-2  dark:bg-violet-600 text-sm rounded-xl w-4 h-4 font-bold flex justify-center items-center">0</span>
          </div>
          <p>Logo</p>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
