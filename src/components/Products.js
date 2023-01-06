import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { getProduct } from "../service/api";
const Products = () => {
  const [products, setProducts] = useState([]);
  //get api
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProduct();
      console.log(data);
      setProducts(data);
    };
    fetchApi();
  }, []);
  return (
    <div className="h-auto dark:bg-slate-800 bg-slate-200 grid lg:grid-cols-3 gap-cols-1 gap-28 py-20">
      {products.map((data) => (
        <div key={data.id}>
          <div className="flex flex-col px-10 bg-slate-300 dark:bg-slate-600 shadow-lg rounded-lg hover:cursor-pointer">
            {/* describe */}
            <div className="flex flex-col justify-around">
              <img src={data.product_image} alt={data.product_title} className="w-52" />
              {/* title */}
              <h1 className="dark:text-white font-bold text-violet-500">
                {data.product_title}
              </h1>
              {/* star */}
              <div className="flex items-center gap-x-2 mt-2">
                <AiFillStar className="text-yellow-400" />
                <p className="dark:text-white text-violet-500">{data.product_rate}</p>
              </div>
              {/* price & button*/}
              <div className="flex flex-row justify-between px-2 mt-2 mb-2">
                <p className="dark:text-white text-violet-500 font-bold">
                  {data.product_price}
                </p>
                <button className="bg-violet-400 w-16 rounded-md text-white hover:w-24 transition-all">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
