import React from "react";
import {useState} from 'react';
import Sidebar from "../components/Sidebar";


const Grocery = () => {
  return (
    <div className = "flex"> 
            
      <Sidebar/>
      

      <div className = "p-7 flex ">
          <h1> GROCERY </h1>
      </div>
    </div>
  );
};

export default Grocery;