import React from 'react';
import '../../App.css';

const Testimonials = () => {
    return (
        <div className='bg-[#130a07] w-full h-fit'>
            <div className='text-white text-center pt-12'>
                <div className='flex justify-center align-center pb-8'>
                    <img src='./ylogo.png' className='  w-[120px] h-[120px] rounded-full'></img>
                </div>
                <h1 className='text-5xl px-[250px]'>Reach Out to Us for Expert Locksmith Services</h1>
                <h3 className='text-lg pt-8 pb-20 opacity-[60%]'> Need help with your locks? Don't hesitate to contact us. Our team of expert locksmiths is always ready to assist you</h3>
            </div>
        </div>   
    );
};

export default Testimonials;