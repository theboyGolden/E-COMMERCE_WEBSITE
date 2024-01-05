import React from "react";
import Sidebar from "../components/Sidebar";

const HomeAppliances = () => {
    return (
        <div className = "flex"> 
            
                <Sidebar/>
            

            <div className = "p-7 flex ">
                <h1> HOME APPLIANCES </h1>
            </div>
        </div>

    );
};

export default HomeAppliances;