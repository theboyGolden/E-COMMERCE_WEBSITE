import {useState} from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsSearch } from "react-icons/bs";
import { AiFillBook, AiFillEnvironment } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { FaBlender } from "react-icons/fa";
import { BiLaptop } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";
import { VscSymbolColor } from "react-icons/vsc";
import { TiSpiral } from "react-icons/ti";
import { TbWashMachine } from "react-icons/tb";


const Sidebar = () => {
    const [open, setOpen] = useState(true);
  
    return (
        <div className = "flex">
          <div className={`bg-dark-purple min-h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative w-72`}> 
          <BsChevronLeft className={`bg-white text-dark-purple text 3xl rounded-full absolute -right-2 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
          
          <div className ="inline-flex">
            <TiShoppingCart className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-4 duration-500 ${open && "rotate-[360deg]"}`} />
            <h1 className= {`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
              Golden Mart
            </h1>
          </div>

          <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>

          <input type={"search"} placeholder="search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}></input>
        </div>


        <Link to="/Grocery">
          <div className="inline-flex mt-4">
            <VscSymbolColor
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
            <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>{" "}GROCERYFFFFF{" "}</h1>
          </div>
        </Link>

        <Link to="/Clothing">
          <div className="inline-flex mt-4">
            <GiClothes className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
            <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>{" "}CLOTHING{" "}</h1>
          </div>
        </Link>


        <br/>
        <br/>
        <br/>

        <Link to="/Cosmetics">
          <div className="inline-flex mt-4">
            <TiSpiral className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
            <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>{" "}COSMETICS{" "}</h1>
          </div>
        </Link>

        <Link to="/HomeAppliances">
          <div className="inline-flex mt-4">
            <TbWashMachine className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
            <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>{" "}HOME APPLIANCES{" "}</h1>
          </div>
        </Link>

        <br/>
        <br/>
        <br/>

        <Link to="/TechAppliances">
          <div className="inline-flex mt-4">
            <BiLaptop className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
            <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>{" "}TECH APPLIANCES{" "}</h1></div>
        </Link>

        <Link to="/">
          <div className="inline-flex mt-4">
            <BiLogOut className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/><h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>{" "}LOGOUT{" "}</h1>
          </div>
        </Link>
          </div>

          <div className='p-7'>
            <h1 className='text-2xl font-semibold'>  </h1>
          </div>
        </div>
    );
}
export default Sidebar;


