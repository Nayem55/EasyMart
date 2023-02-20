import React from 'react';
import useProduct from '../../Hooks/useProduct';
import Product from '../Home/Product';

const HomeDecoration = () => {
    const [products] = useProduct();
    const homedecorations = products.filter(product=> product.category==="Home Decoration");
    return (
        <div>
            <div>
        <h1 className="text-primary text-center text-4xl my-10 font-bold">
          Home Decoration
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
          {homedecorations.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>
        </div>
    );
};

export default HomeDecoration;