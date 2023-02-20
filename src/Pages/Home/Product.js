import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const rating = [...Array(Math.ceil(product.ratings)).keys()];
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
        <div className="flex">
        {
          rating.map(item=><p><FontAwesomeIcon className="text-[#e7af05]" icon={faStar}></FontAwesomeIcon></p>)
        }
        </div>
      </div>
      <div className="flex justify-between mt-2 ">
        <button className="btn btn-xs bg-primary border-none">Add To Cart</button>
        <button className="btn btn-xs bg-primary border-none">Order Now</button>
      </div>
    </div>
  );
};

export default Product;
