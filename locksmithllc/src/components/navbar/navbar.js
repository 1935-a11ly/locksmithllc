import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-start px-28 py-2 bg-[#030200] text-white bg-opacity-[100%]">
        <div className="flex-1">
          <img src='./ylogo.png' className='w-12 h-12 rounded-full inline mr-2 hover:animate-spin'></img><h2 className="inline text-xl font-bold logoheader">YEMANIS</h2>
        </div>
        <div className="flex justify-end text-lg flex-1 space-x-4 py-2">
          <a href="#about" className="hover:text-[#fbd8a0] hover:scale-[1.2] hover:ease-in-out duration-300">About</a>
          <a href="#contact" className="hover:text-[#fbd8a0] hover:scale-[1.2] hover:ease-in-out duration-300">Contact</a>
          <a href="#services" className="hover:text-[#fbd8a0] hover:scale-[1.2] hover:ease-in-out duration-300">Services</a>
          <a href="#services" className="border-[0.5px] font-bold rounded-xl text-white text-sm hover:text-white border-[#fbd8a0] hover:text-black hover:bg-[#fbd8a0] hover:ease-in-out duration-500 ml-12 p-[6px] opacity-[80%]">24 Hour Locksmiths</a>
        </div>
      </nav>
    );
};

export default Navbar;