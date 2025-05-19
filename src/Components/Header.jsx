import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { PiFacebookLogoBold } from "react-icons/pi";

const Header = () => {
  return (
    <div style={{ backgroundColor: '#00387A' }}className=" text-white text-sm">
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
  );
}

export default Header;
