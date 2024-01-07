import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";


const Homepage = () => {
  return (
    <div className = "flex"> 
            
      <Sidebar/>
        

      <div className = "p-2 flex-1 ">
        <Header/>
          <h1> HOMEPAGE </h1>
      </div>
    </div>
  );
};

export default Homepage;