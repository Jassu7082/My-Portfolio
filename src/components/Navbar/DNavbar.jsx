import React, { useState } from 'react';
import { FaBars, FaHome, FaBriefcase, FaCode, FaEnvelope, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex border-b-2 border-[slate-100] bg-slate-900 z-10 items-center justify-between px-4 sticky top-0 py-4 border-slate-300/10 lg:mx-0">
      <div className="flex items-center gap-2 pl-12"> 
        <img className="border h-12 w-12 rounded-full" src={logo} alt="Logo" />
        <p className="text-2xl font-bold  text-slate-100 ">Jaswanth.dev</p>
      </div>
      <div className="lg:hidden">
  {!showSidebar && (
    <button onClick={toggleSidebar}>
      <FaBars className="text-gray-700 text-gray-300" />
    </button>
  )}
</div>


      {/* Navbar Links (visible on larger screens) */}
      <nav className="hidden lg:flex gap-4 lg:space-x-4">
        <a href="#Home" className="flex items-center text-gray-700 text-gray-300 hover:text-gray-900 hover:text-gray-100">
          <FaHome className="mr-2" /> Home
        </a>
        <a href="#Projects" className="flex items-center text-gray-700 text-gray-300 hover:text-gray-900 hover:text-gray-100">
          <FaBriefcase className="mr-2" /> Projects
        </a>
        <a href="#Tech" className="flex items-center text-gray-700 text-gray-300 hover:text-gray-900 hover:text-gray-100">
          <FaCode className="mr-2" /> Tech
        </a>
        <a href="#Contact" className="flex items-center text-gray-700 text-gray-300 hover:text-gray-900 hover:text-gray-100">
          <FaEnvelope className="mr-2" /> Contact
        </a>
      </nav>

      {/* Sidebar (visible on mobile when toggled) */}
      {showSidebar && (
        <div className="lg:hidden  absolute top-0 right-0 w-full h-full bg-gray-100 bg-opacity-50 z-10">
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg">
            <div className="flex justify-between items-center px-4 py-2">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={toggleSidebar}>
                <FaTimes className="text-gray-700 text-black " />
              </button>
            </div>
            <nav className="flex flex-col py-4 gap-4 ml-4 space-y-2">
              <a href="#Home" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaHome className="mr-2" /> Home
              </a>
              <a href="#Projects" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaBriefcase className="mr-2" /> Projects
              </a>
              <a href="#Tech" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaCode className="mr-2" /> Tech
              </a>
              <a href="#Contact" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaEnvelope className="mr-2" /> Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
