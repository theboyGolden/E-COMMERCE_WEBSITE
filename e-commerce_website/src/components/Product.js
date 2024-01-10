// src/components/Product.js
import React from 'react';

const Product = ({ id, name, price, image, onAddToCart }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Goods Image */}
      <img src={image} alt={name} className="w-full h-32 object-cover mb-2" />

      {/* Goods Details */}
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">GHC {price}</p>

      {/* Add to Cart Button */}
      <button onClick={() => onAddToCart({ id, name, price })}>Add to Cart</button>
    </div>
  );
};

export default Product;
