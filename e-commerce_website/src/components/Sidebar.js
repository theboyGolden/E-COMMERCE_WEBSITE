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


const Sidebar = () => {
    const [open, setOpen] = useState(true);
  
    return (
        <div className = "flex">
          <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative w-72`}> 
          <BsChevronLeft className={`bg-white text-dark-purple text 3xl rounded-full absolute -right-2 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
          
          <div className ="inline-flex">
            <TiShoppingCart className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-4 duration-500 ${open && "rotate-[360deg]"}`} />
            <h1 className= {`text-white origin-left font-medium text 3xl duration-300 ${!open && "scale-0"}`}>
              Golden Mart
            </h1>
          </div>
          </div>

          <div className='p-7'>
            <h1 className='text-2xl font-semibold'>Home Page</h1>
          </div>
        </div>
    );
}
export default Sidebar;


