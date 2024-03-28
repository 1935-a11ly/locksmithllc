import React from 'react';
import '../../App.css';

const Hero = () => {
    return (
        <div className='herosection'>
            {/* <div className='flex justify-center items-center mb-2 pt-6'>
            <img src='./ylogo.png' className='w-[130px] h-[130px] rounded-full opacity-[50%]'></img>
            </div>
            <div><h1 className='pt-[0px] text-center block text-3xl text-white font-light mb-6'>One Stop For All Your Lock-Out Needs.</h1></div> */}
            <div className=' pt-[80px] text-white px-24 block'>
                <video src="./hero.mp4" autoPlay muted loop className='w-[850px] h-fit rounded-3xl opacity-[60%] mb-16 mt-0'/>  
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
            <div className='flex justify-end items-end mt-8 px-24'>
                <h2 className='text-white block opacity-[80%]'>One Stop For All Your Lockout Needs.</h2>
            </div>
            <div className='flex justify-end items-end px-24'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#fbd8a0] w-12 h-12 mt-4 animate-pulse block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
            </div>
        </div>
        
    );
};

export default Hero;