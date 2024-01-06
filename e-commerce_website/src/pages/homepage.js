import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import GOLDEN_MART from '../images/GOLDEN_MART.jpg';


const Homepage = () => {
  return (
    <div className="flex">
      

      <div className="flex-1">
        <div
          className="bg-cover bg-no-repeat h-screen relative" style={{ backgroundImage: `url(${GOLDEN_MART})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-white font-bold text-5xl mb-4">
                Golden Mart
              </h1>
              <p className="text-white text-2xl mb-8">Welcome to Golden Mart, an innovative and user-friendly e-commerce platform designed to redefine your online shopping experience.</p>
              <Link to="/Grocery">
              <button className="bg-gradient-to-r from-cyan-400 to-light-blue-500 hover:from-cyan-500 hover:to-light-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg focus:outline-none">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;