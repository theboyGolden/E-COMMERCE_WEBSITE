import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";
import GOLDEN_MART_2 from '../images/GOLDEN_MART_2.jpg'
import hoodie from '../images/hoodide.jpeg'
import desktopset from '../images/computer-tablet-phone-mockup-1-1.png'
import macbook from '../images/macbook.jpeg'
import washingMachine from '../images/washing machine.jpeg'
import Camera from '../images/Camera.jpeg'


const Homepage = () => {
  return (
    <div className = "flex"> 
            
      <Sidebar/>
        

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
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Goods Image */}
      <img src={hoodie} alt="Good 1" className="w-full h-32 object-cover mb-2" />

      {/* Goods Details */}
      <h2 className="text-lg font-semibold">Grade 1 Hoodie</h2>
      <p className="text-gray-600">GHC 250.00</p>
    </div>

    {/* Box 2 */}
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Goods Image */}
      <img src={desktopset} alt="Good 2" className="w-full h-32 object-cover mb-2" />

      {/* Goods Details */}
      <h2 className="text-lg font-semibold">Desktop Set</h2>
      <p className="text-gray-600">GHC 7,000.00</p>
    </div>

    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Goods Image */}
      <img src={macbook} alt="Good 2" className="w-full h-32 object-cover mb-2" />

      {/* Goods Details */}
      <h2 className="text-lg font-semibold">MACBOOK PRO 2024</h2>
      <p className="text-gray-600">GHC 9,000.00</p>
    </div>

    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Goods Image */}
      <img src={washingMachine} alt="Good 2" className="w-full h-32 object-cover mb-2" />

      {/* Goods Details */}
      <h2 className="text-lg font-semibold">washing Machine</h2>
      <p className="text-gray-600">GHC 3,500.00</p>
    </div>

    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Goods Image */}
      <img src={Camera} alt="Good 2" className="w-full h-32 object-cover mb-2" />

      {/* Goods Details */}
      <h2 className="text-lg font-semibold">GEN Z Camera</h2>
      <p className="text-gray-600">GHC 800.00 </p>
    </div>

    
    {/* Add more boxes as needed */}
  </div>
</div>

    </div>
  );
};

export default Homepage;