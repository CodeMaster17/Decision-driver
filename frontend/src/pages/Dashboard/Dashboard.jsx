import { NavLink, Outlet } from "react-router-dom"
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineFundView } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { FiBookOpen } from "react-icons/fi"

import { LuTestTubes } from "react-icons/lu";
import { PiUsersFourLight } from "react-icons/pi";
const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <section className="flex ">
            <div className={`h-screen sticky top-0 text-white  bg-[#1f273c] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-2 ${isOpen ? "w-[15vw]" : "w-[5vw]"}`}>
                <div className="flex">
                    <RxHamburgerMenu
                        onClick={toggle}
                        className="size-6 mt-5 ml-4 cursor-pointer"
                    />
                </div>

                <ul className="flex flex-col space-y-2 mt-12">
                    <li>
                        <NavLink to="/dashboard/guide"
                            // className={` flex px-[1rem] py-[0.8rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]`}
                            className={({ isActive }) =>
                                [
                                    "flex px-[1rem] py-[0.8rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]",
                                    isActive ? "active" : "",

                                ].join(" ")}
                        // activeClassName="bg-[#c3dba9] bg-opacity-25 rounded-[0.5rem]"
                        >
                            <div className="mr-3 block"><FiBookOpen className="size-5" /></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Guide</h3>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/dashboard/examples"
                            className=" flex px-[1rem] py-[0.8rem] focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]"
                        >
                            <div className="mr-3 block"><GoPencil className="size-5" /></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Examples</h3>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/dashboard/home"
                            className={({ isActive }) =>
                                [
                                    "flex px-[1rem] py-[0.8rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]",
                                    isActive ? "active" : "",

                                ].join(" ")}
                        >
                            <div className="mr-3 block"><LuLayoutDashboard className="size-5" /></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Dashboard</h3>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/create-rule"
                            className={({ isActive }) =>
                                [
                                    "flex px-[1rem] py-[0.8rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]",
                                    isActive ? "active" : "",

                                ].join(" ")}
                        >
                            <div className="mr-3 block"><IoCreateOutline className="size-6" /></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Create Rules</h3>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/view-rule"
                            className={({ isActive }) =>
                                [
                                    "flex px-[1rem] py-[0.8rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]",
                                    isActive ? "active" : "",

                                ].join(" ")}
                        >
                            <div className="mr-3 block"><AiOutlineFundView className="size-6" /></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>View Rules</h3>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/test-rule"
                            className=" flex px-[1rem] py-[0.8rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]"
                        >
                            <div className="mr-3 block"><LuTestTubes className="size-5" /></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Test Rules</h3>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/users"
                            className=" flex px-[1rem] py-[0.8rem] active:bg-[#c3dba9] active:bg-opacity-25 active:rounded-[0.5rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]"
                        >
                            <div className="mr-3 block"><PiUsersFourLight className="size-6" /></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Users</h3>
                        </NavLink>
                    </li>
                    <hr className=" border-1 border-gray-500" />
                    <li>
                        <NavLink to="/"
                            className={({ isActive }) =>
                                [
                                    "flex px-[1rem] py-[0.8rem]  focus:bg-[#c3dba9] focus:bg-opacity-25 focus:rounded-[0.5rem]",
                                    isActive ? "active" : "",

                                ].join(" ")}
                        >
                            <div className="mr-3 block"><CiLogout className="size-6" /></div>
                            <h3 className={`focus:text-[#CBF69E] ${isOpen ? "block" : "hidden"}`}>Home</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-full">
                {/* <Navbar /> */}
                {/* TODO: Sidebar */}
                <Outlet />
            </div>
        </section>
    )
}

export default Dashboard
