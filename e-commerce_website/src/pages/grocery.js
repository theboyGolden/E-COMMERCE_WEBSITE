import React from "react";
import {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/header";


const Grocery = () => {
  return (
    <div className = "flex"> 
            
      <Sidebar/>
      

      <div className = "p-2 flex-1 ">
        <Header/>
          <h1> GROCERY </h1>
      </div>
    </div>
  );
};

export default Grocery;