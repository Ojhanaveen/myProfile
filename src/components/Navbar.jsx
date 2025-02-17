import React from 'react';
import Myicon from '../assets/MYICONSVG.svg';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        
        {/* Name Element with 3D Animation */}
        <div className='text-2xl font-bold hidden md:inline cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:translate-x-2 hover:translate-y-2'>
          Naveen
        </div>
        
        {/* Navigation Links */}
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        
        {/* Revolving Element with Smooth Hover Effect */}
        <div className='hidden md:inline'>
          <div className="w-12 h-12 rounded-full border-4 
            flex justify-center items-center 
            transition-transform duration-500 
            hover:scale-110 animate-spin-slow">
            <img src={Myicon} alt="Favicon" className="w-6 h-6 transition-transform duration-500 hover:scale-110" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
