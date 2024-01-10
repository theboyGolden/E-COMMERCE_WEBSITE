import React from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";


const Header = () => {
  return (
    <header className="bg-Niagara text-black p-5">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center"> {/* Wrap "Golden Mart" and the icon in a flex container */}
      <h1 className="text-2xl font-bold mr-2">Golden Mart</h1>
      <TiShoppingCart className={`text-amber-200 bg-Niagara text-4xl rounded cursor-pointer`} />
    </div>
    <nav>
      <ul className="flex space-x-4">
        <Link to="/"><li><a href="#" className="hover:underline">Home</a></li></Link>
        <Link to="/Grocery"><li><a href="#" className="hover:underline">Products</a></li></Link>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
    <button className="bg-white text-gold-500 py-2 px-4 rounded-md hover:bg-gray-200">
      Sign In
    </button>
  </div>
</header>

  );
};

export default Header;