import React from "react";
import useProduct from "../../Hooks/useProduct";
import Product from "../Home/Product";

const GirlFashion = () => {
  const [products] = useProduct();
  const girlsfashion = products.filter(
    (product) => product.category === "Girl's Fashion"
  );
  return (
    <div>
      <h1 className="text-primary text-center text-4xl my-10 font-bold">
        Girl's Fashion
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        {girlsfashion.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default GirlFashion;
