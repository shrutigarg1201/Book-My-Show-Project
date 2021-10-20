import React from "react";
import { BiSearch,BiMenu,BiChevronRight,BiChevronLeft, BiShareAlt} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

const NavSm = () => {
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-2xl font-medium">It All Starts Here!</h3>
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full"/>
            </div>
        </div>
        </>
    )
};  
  //navbarmedium
const NavLg = () => {
    return (
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-5">
                <div className="w-25 h-12">
                    <img  //svg is needed for logo
                    src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                    alt="logo" 
                    className="w-full h-full" />
                </div>
                <div className="bg-white gap-3 w-full flex items-center px-3 py-2 rounded-sm">
                    <BiSearch />
                    <input type="search" className="w-full focus:outline-none" placeholder="Search for Movies,Events,Plays,Sports and activities" />
                </div>
            </div>
            <div className="flex items-center gap-5 cursor-pointer">
                <span className="text-gray-400 text-sm gap-1 flex items-center hover:text-white ">
                    Kota <AiFillCaretDown className="text-white text-xs" />
                </span>
                <button className="bg-red-500 text-white text-xs rounded px-4 py-1">
                    Sign in
                </button>
                <div className="w-8 h-8 text-gray-300">
                    <BiMenu className="w-full h-full" />
                </div>
            </div>
        </div>
        </>
    )
};  //navbarlarge

const MovieNavbar = () => {
    return (
        <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navColor-800 py-2 px-4">
            <div className="md:hidden">{
                /*Mobile Screen*/
                <NavSm />
            }</div>
            <div className="hidden lg:hidden md:block">{ //even in this we can avoid md
                /*Tablet Screen*/
                <NavSm />  //calling here==rendering
            }</div>
            <div className="hidden lg:flex">{
                /*Laptop Screen */
                <NavLg />
            }</div>
        </nav>
        </>
    )
};

export default MovieNavbar;