import React from "react";
import Sidebar from "../components/Sidebar";


const Homepage = () => {
  return (
    <div className = "flex"> 
            
      <Sidebar/>
        

      <div className = "p-7 flex ">
          <h1> HOMEPAGE </h1>
      </div>
    </div>
  );
};

export default Homepage;