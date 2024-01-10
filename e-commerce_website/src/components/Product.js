// src/components/Product.js
import React from 'react';
import { TiShoppingCart } from "react-icons/ti";

const Product = ({ id, name, price, image, onAddToCart }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Goods Image */}
      <img src={image} alt={name} className="w-full h-32 object-cover mb-2" />

      {/* Goods Details */}
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">GHC {price}</p>

      {/* Add to Cart Button */}
      <button className="bg-amber-300 inline-flex pl-1 rounded" onClick={() => onAddToCart({ id, name, price })}>
        Add to Cart
        <TiShoppingCart className={`text-white-200 bg-amber-300 pl-1 text-2xl rounded cursor-pointer`} />
    </button>
    </div>
  );
};

export default Product;
