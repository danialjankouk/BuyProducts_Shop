import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loader from "../assets/loader.svg";
//redux
import { fetchProducts } from "../redux/products/productsAction";
import { useDispatch, useSelector } from "react-redux";
const Products = () => {
  //redux
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState.products);
  //get api
  useEffect(() => {
    if (!productsState.length) dispatch(fetchProducts());
  }, []);
  return (
    <div className="h-auto p-2 items-center dark:bg-slate-800 bg-slate-200 grid lg:grid-cols-3 gap-cols-1 gap-10 py-20">
      {!productsState.length ? (
        // loader
        <div className="flex justify-center dark:text-white text-black h-screen item-center">
          Loading ...
        </div>
      ) : (
        // products
        productsState.map((data) => (
          <div key={data.id} className="flex flex-col justify-center mt-5 items-center">
            <Link to={`/products/${data.id}`}>
              <div className="flex flex-col justify-center p-5 items-center w-[20rem] bg-slate-300 dark:bg-slate-600 shadow-lg rounded-lg hover:cursor-pointer">
                {/* describe */}
                <div className="flex flex-col justify-around">
                  <img
                    src={data.product_image}
                    alt={data.product_title}
                    className="w-52 h-52 rounded-md"
                  />
                  {/* title */}
                  <h1 className="dark:text-white font-bold text-violet-500">
                    {data.product_title}
                  </h1>
                  {/* star */}
                  <div className="flex items-center gap-x-1 mt-2">
                    <AiFillStar className="text-yellow-400" />
                    <p className="dark:text-white text-violet-500">
                      {data.product_rate}
                    </p>
                  </div>
                  {/* price & button*/}
                  <div className="flex flex-row justify-between px-2 mt-2 mb-2">
                    <p className="dark:text-white text-violet-500 font-bold">
                      {data.product_price} $
                    </p>
                    <button className="bg-violet-400 w-16 rounded-md text-white hover:w-24 transition-all">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
