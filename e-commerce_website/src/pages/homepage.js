import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";
import Product from "../components/Product";  // Import the Product component
import Cart from "../components/Cart";        // Import the Cart component
import GOLDEN_MART_2 from '../images/GOLDEN_MART_2.jpg';
import hoodie from '../images/hoodide.jpeg';
import desktopset from '../images/computer-tablet-phone-mockup-1-1.png';
import macbook from '../images/macbook.jpeg';
import washingMachine from '../images/washing machine.jpeg';
import Camera from '../images/Camera.jpeg';

const Homepage = () => {
  // State to manage items in the shopping cart
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="flex"> 
      <Sidebar />

      <div className="p-2 flex-1">
        <Header />
        <h1>HOMEPAGE</h1>

        {/* Golden Mart Flyer */}
        <div className="my-4 w-full h-100 relative overflow-hidden">
          <img src={GOLDEN_MART_2} alt="Golden Mart" className="w-full h-100 object-cover" />
          {/* Content inside the div goes here */}
        </div>

        {/* Boxes for Goods */}
        <div className="flex flex-wrap gap-4">
          {/* Box 1 */}
          <Product id={1} name="Grade 1 Hoodie" price={250.00} image={hoodie} onAddToCart={handleAddToCart} />

          {/* Box 2 */}
          <Product id={2} name="Desktop Set" price={7000.00} image={desktopset} onAddToCart={handleAddToCart} />

          {/* Add more products as needed */}
        </div>
      </div>

      {/* Shopping Cart */}
      <Cart items={cartItems} />
    </div>
  );
};

export default Homepage;
