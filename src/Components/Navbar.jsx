import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { PiFacebookLogoBold } from "react-icons/pi";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <div style={{ backgroundColor: '#00387A' }} className="text-white text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          <div className="flex flex-wrap items-center space-x-4">
            <p className="flex items-center space-x-1">
              <IoLocationOutline className="text-white w-5 h-5" />
              <span>Manigram, Tilottama-5, Rupandehi, Nepal</span>
            </p>
            <span>|</span>
            <p className="flex items-center space-x-1">
              <LuPhone className="text-white w-5 h-5" />
              <span>071562537, 9857034838, 9857043464, 9846970252</span>
            </p>
            <span>|</span>
            <p className="flex items-center space-x-1">
              <MdMailOutline className="text-white w-5 h-5" />
              <span>info@nepathyacollege.edu.np</span>
            </p>
          </div>

          <div className="ml-4">
            <PiFacebookLogoBold className="text-white w-6 h-6 hover:text-blue-300 cursor-pointer" />
          </div>
        </div>
      </div>

      <nav className="bg-white text-black px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-medium font-sm">
          <li><a href="/" className="font-bold hover:text-[#9F162E] cursor-pointer">Home</a></li>
          <li><a href="/aboutus" className="hover:text-[#9F162E] cursor-pointer">About Us</a></li>
          <li><a href="/courses" className="hover:text-[#9F162E] cursor-pointer">Courses</a></li>
          <li><a href="/Studentlife" className="hover:text-[#9F162E] cursor-pointer">Student Life</a></li>
          <li><a href="/Career" className="hover:text-[#9F162E] cursor-pointer">Career</a></li>
          <li><a href="/Contact" className="hover:text-[#9F162E] cursor-pointer">Contact</a></li>
          <li><a href="/projec" className="hover:text-[#9F162E] cursor-pointer">Project Hub</a></li>
        </ul>

        {/* Get Admission Button */}
        <button className="bg-[#9F162E] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#7c1124] transition duration-200">
          Get Admission
        </button>
      </nav>
     <hr className='mb-6 bg-[#8fb8e6] h-0.5'/>
    </>
  );
};

export default Header;
