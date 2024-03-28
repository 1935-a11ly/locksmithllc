import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-start px-28 py-2 bg-[#030200] text-white bg-opacity-[100%]">
        <div className="flex-1">
          <img src='./ylogo.png' className='w-12 h-12 rounded-full inline mr-2'></img><h2 className="inline text-xl font-bold">YEMANIS</h2>
        </div>
        <div className="flex justify-end text-xl flex-1 space-x-4 py-2">
          <a href="#about" className="hover:text-[#fbd8a0] hover:scale-[1.2] hover:ease-in-out duration-300">About</a>
          <a href="#contact" className="hover:text-[#fbd8a0] hover:scale-[1.2] hover:ease-in-out duration-300">Contact</a>
          <a href="#services" className="hover:text-[#fbd8a0] hover:scale-[1.2] hover:ease-in-out duration-300">Services</a>
        </div>
      </nav>
    );
};

export default Navbar;