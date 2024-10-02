import React from "react";
import logo from "../assets/mms_it_logo.jpeg";
import user from "../assets/user.jpg";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#f5f5f5] border-gray-200 dark:bg-gray-900 shadow-sm h-auto">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo and Title */}
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10 w-10 rounded-lg" alt="MMS Logo" />
          <span className="text-2xl font-semibold text-stone-600 dark:text-white whitespace-nowrap">
            MMS IT
          </span>
        </Link>

        {/* User Section */}
        <div className="flex items-center space-x-2 md:order-2 cursor-pointer">
          <img src={user} alt="User" className="h-8 w-8 rounded-full" />
          <h6 className="font-medium text-stone-600">Lu Lu</h6>
        </div>
      </div>

      {/* Centered Search Bar with Icon */}
      <div className="relative max-w-screen-xl mx-auto flex justify-center mt-4">
        <div className="relative w-full md:w-[400px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HiOutlineSearch className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="search"
            className="w-full h-10 pl-10 text-sm text-gray-900 border border-blue-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search ..."
          />
        </div>
      </div>

      {/* Title */}
      <div className="max-w-screen-xl mx-auto mt-8">
        <h1 className="text-lg font-bold text-stone-600">Voucher App :</h1>
      </div>
    </nav>
  );
};

export default Navbar;
