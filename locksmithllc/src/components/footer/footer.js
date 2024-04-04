import React from 'react';

const Footer = () => {
    return (
    
    <>
    
        <footer className="bg-[#140a07] p-10  pb-14">
            <nav className="gap-4 flex justify-center align-center">
                <a href='#bio' className="link link-hover text-white hover:scale-[1.2] hover:ease-in-out duration-300">About</a> 
                <a href='#projects' className="link link-hover text-white hover:scale-[1.2] hover:ease-in-out duration-300">Contact</a> 
                <a href='#experiences' className="link link-hover text-white hover:scale-[1.2] hover:ease-in-out duration-300">Services</a> 
            </nav> 
            <aside className='flex justify-center align-center text-white pt-8'>
                <p>Copyright © YEMANIS LOCKSMITHS</p>
            </aside>
            <aside className='flex justify-center align-center space-x-6 text-white pt-8'>
                <a href='#bio' className="link link-hover text-white hover:scale-[1.2] hover:ease-in-out duration-300">Privacy Policy</a>
                <a href='#bio' className="link link-hover text-white hover:scale-[1.2] hover:ease-in-out duration-300">Copyright Notice</a>
            </aside>
        </footer>
    </>

    );
};

export default Footer;