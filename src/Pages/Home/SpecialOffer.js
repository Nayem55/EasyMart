import React from "react";
import useProduct from "../../Hooks/useProduct";
import Product from "./Product";
import SpecialProduct from "./SpecialProduct";

const SpecialOffer = () => {
  const [products] = useProduct();
  const boysfashion = products.filter(product=> product.category==="Boy's Fashion").slice(0,5);
  const girlsfashion = products.filter(product=> product.category==="Girl's Fashion").slice(1,6);
  const fashion = [...boysfashion,...girlsfashion];
  const gadgets = products.filter(product=> product.category==="Gadgets").slice(0,10);

  return (
    <div className="m-4">
      <h1 className="text-center text-4xl text-primary lg:my-10 font-bold">
        Special Offers
      </h1>
      {/* fashions */}
      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Fashions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
          {
            fashion.map((product) => (
              <SpecialProduct product={product}></SpecialProduct>
          ))}
        </div>
      </div>
      {/* gadgets */}
      <div>
        <p className="text-secondary mb-4 text-2xl mt-16 text-center">
          Gadgets
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
          {gadgets.map((product) => (
            <SpecialProduct product={product}></SpecialProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
