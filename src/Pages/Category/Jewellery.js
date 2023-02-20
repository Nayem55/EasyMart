import React from "react";
import useProduct from "../../Hooks/useProduct";
import Product from "../Home/Product";

const Jewellery = () => {
  const [products] = useProduct();
  const jewelry = products.filter((product) => product.category === "Jewelry");
  return (
    <div>
      <div>
        <h1 className="text-primary text-center text-4xl my-10 font-bold">
          Jewellery 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
          {jewelry.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
