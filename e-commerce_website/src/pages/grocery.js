import React from "react";
import {useState} from 'react';
import Sidebar from "../components/Sidebar";


const Grocery = () => {
  return (
    <div>
      <div className = "flex">
        <Sidebar/>
      </div>

      <div className="p-7 flex-1">
        
      </div>
      <h1>GROCERY</h1>
    </div>
  );
};

export default Grocery;