import { Link, Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineFundView } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return (
<<<<<<< HEAD
        <section className="flex ">
            <div className={`h-screen sticky text-white  bg-[#1f273c] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-2 ${isOpen ? "w-[15vw]" : "w-[5vw]"}`}>
                <div className="flex">
                    <RxHamburgerMenu 
                        onClick={toggle} 
                        className="size-6 mt-5 ml-4 cursor-pointer"
                    />
                    {/* <h1 className="font-bold mt-5 ml-5">Decision Driver</h1> */}
                </div>
                
                <ul className="flex flex-col space-y-2 mt-12">
=======
        <section className="flex">
            <div className="w-[15vw] border-2  h-screen sticky top-0 left-0">
                <ul>
>>>>>>> e2c3e339efba93e30bb833f32bad3c4af559a995
                    <li>
                        <Link to="/dashboard/home"
                            className=" flex px-[1rem] py-[0.8rem] focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]"
                        >
                            <div className="mr-3 block"><LuLayoutDashboard className="size-5"/></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Dashboard</h3>
                        </Link>
                    </li>
                    <li>
                        
                        <Link to="/dashboard/create-rule"
                            className=" flex px-[1rem] py-[0.8rem] focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]"
                        >
                            <div className="mr-3 block"><IoCreateOutline className="size-6"/></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Create Rules</h3>
                        </Link>
                    </li>
                    <li>
                        
                        <Link to="/dashboard/view-rule"
                            className=" flex px-[1rem] py-[0.8rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]"
                        >
                            <div className="mr-3 block"><AiOutlineFundView className="size-6"/></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>View Rules</h3>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-full">
                <Navbar  />
                {/* TODO: Sidebar */}
                <Outlet />
            </div>
        </section>
    )
}

export default Dashboard
