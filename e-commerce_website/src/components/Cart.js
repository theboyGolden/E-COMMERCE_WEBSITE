// src/components/Cart.js
import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="border p-4 m-2">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
