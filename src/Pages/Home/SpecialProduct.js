import React from "react";

const SpecialProduct = ({ product }) => {
  return (
    <div className="specialProduct">
      <div className="w-[200px] h-[210px]">
        <img className="mb-3" src={product?.img} alt="" />
      </div>
      <p title={product?.name}>
        {product?.name.length > 20
          ? `${product.name.slice(0, 20)}...`
          : product?.name}
      </p>
      <div className="flex">
        <p className="mr-4">${Math.ceil(product?.price / 2)}</p>
        <p className="text-accent">
          <s>${product?.price}</s>
        </p>
      </div>
      <div className="flex justify-between mt-2 ">
        <button className="btn btn-xs bg-primary border-none">
          Add To Cart
        </button>
        <button className="btn btn-xs bg-primary border-none">Order Now</button>
      </div>
    </div>
  );
};

export default SpecialProduct;
