// src/components/Cart.js
import React from 'react';

const Cart = ({ items, onClearCart }) => {
  return (
    <div className="border p-4 m-2">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - GH₵{item.price}</li>
        ))}
      </ul>

      {/* Clear Cart Button */}
      <button onClick={onClearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
