import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Navbar Logo */}
      <img src={assets.logo} alt="Logo" className="w-36" />

      {/* Navbar Links */}

      <ul className="hidden sm:flex gap-5  text-gray-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Navbar Search and Profile */}
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative ">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center text-white bg-black rounded-full leading-4 aspect-square text-[9px]">
            110
          </p>
        </Link>

        {/* Mobile Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 sm:hidden cursor-pointer"
          alt=""
        />

        {/* Side bar menu for small screens */}

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-50 transition-all ${
            visible ? "w-3/5" : "w-0"
          } `}
        >
          <div className="flex flex-col text-gray-600">
            {/* Go Back */}
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt=""
              />
              <p>Back</p>
            </div>
            {/* Links */}
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b-[1px] border-gray-300 hover:bg-gray-100 " to="/">Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b-[1px] border-gray-300 hover:bg-gray-100 " to="/collection">Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b-[1px] border-gray-300 hover:bg-gray-100 " to="/about">About</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b-[1px] border-gray-300 hover:bg-gray-100 " to="/contact">Contact</NavLink >

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
