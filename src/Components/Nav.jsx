


import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa'; // Icons from react-icons library
import logo from './images.png';

function Nav() {
  return (
    <nav className="w-full h-18 bg-[#FFFFFF] flex items-center justify-between px-6 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src='data:image/jpeg;base64,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' className="h-10 w-10 object-contain" alt="Logo" />
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-8 text-gray-700">
        <a href="#home" className="hover:text-black">Home</a>
        <a href="#about" className="hover:text-black">About Us</a>
        <a href="#products" className="hover:text-black">Products</a>
        <a href="#contact" className="hover:text-black">Contact Us</a>
      </div>

      {/* Icons */}
      <div className="flex space-x-6 text-gray-700">
        <FaSearch className="hover:text-black cursor-pointer" />
        <FaHeart className="hover:text-black cursor-pointer" />
        <FaShoppingCart className="hover:text-black cursor-pointer" />
        <FaBars className="hover:text-black cursor-pointer md:hidden" />
      </div>
    </nav>
  );
}

export default Nav;
