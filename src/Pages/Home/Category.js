import React from "react";
import useProduct from "../../Hooks/useProduct";
import Product from "./Product";

const Category = () => {
  const [products] = useProduct();
  const boysfashion = products.filter(product=> product.category==="Boy's Fashion").slice(2,12);
  const girlsfashion = products.filter(product=> product.category==="Girl's Fashion").slice(2,12);
  const houseItems = products.filter(product=> product.category==="Household Items").slice(0,10);
  const computerItems = products.filter(product=> product.category==="Computer Accessories").slice(0,10);
  const Gadgets = products.filter(product=> product.category==="Gadgets").slice(8,18);
  const jewelry = products.filter(product=> product.category==="Jewelry").slice(0,10);
  const homedecorations = products.filter(product=> product.category==="Home Decoration").slice(0,10);
  const cosmetics = products.filter(product=> product.category==="Cosmetics").slice(0,10);

  return (
    <div className="m-4">
      <h1 className="text-center text-4xl text-primary lg:my-10 font-bold">
        Categories
      </h1>
      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Boy's Fashion
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        {
            boysfashion.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>

      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Girl's Fashion
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        {
            girlsfashion.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>

      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Household Items
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        {
            houseItems.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>

      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Computer Accessories
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        {
            computerItems.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>

      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Gadgets
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        {
            Gadgets.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>

      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Jewellery
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        {
            jewelry.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>

      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Home Decoration
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        {
            homedecorations.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>

      <div>
        <p className="text-secondary mb-4 text-2xl mt-6 text-center">
          Cosmetics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        {
            cosmetics.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Category;
