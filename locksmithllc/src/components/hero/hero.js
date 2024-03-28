import React from 'react';
import '../../App.css';

const Hero = () => {
    return (
        <div className='herosection'>
            <div className='float-left pt-[50px] text-white px-24'>
                <video src="./hero.mp4" autoPlay muted loop className='w-[600px] h-fit rounded-3xl opacity-[40%] mb-16 mt-16'/>  
                <h1 className='text-5xl'>PROFESSIONAL LOCKSMITH SERVICES</h1> 
                <h2 className='text-[16px] pt-8 pb-8'>Providing reliable and professional locksmith services for all your lock and key needs 24/7</h2>
                <div className='space-x-6'>
                <button className='shadow-xl border-[1px] bg-white rounded-xl text-black p-[9px]'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mb-[2.5px] pr-[2px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                Our Services
                </button>
                <button className='bg-[#48341c] rounded-xl text-white p-[11px]'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;