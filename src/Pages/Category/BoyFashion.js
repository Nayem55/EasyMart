import React from "react";
import useProduct from "../../Hooks/useProduct";
import Product from "../Home/Product";

const BoyFashion = () => {
  const [products] = useProduct();
  const boysfashion = products.filter(
    (product) => product.category === "Boy's Fashion"
  );
  return (
    <div>
    <h1 className="text-primary text-center text-4xl my-10 font-bold">Boy's Fashion</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
      {boysfashion.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
    </div>
   
  );
};

export default BoyFashion;
