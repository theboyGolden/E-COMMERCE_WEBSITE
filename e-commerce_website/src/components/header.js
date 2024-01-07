import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gold-500 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Golden Mart</h1>
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