import React, { useEffect, useState } from "react";
import Land3Props from "./Land3Props";
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
    <div className="h-auto dark:bg-slate-800 bg-slate-200">
      {products.map((data) => (
        <div key={data.id}>
            {/* <img src={data.url} alt={data.title}/> */}
            <p className="">{data.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
