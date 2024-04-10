import React, { useEffect } from 'react';
import '../../App.css';
import DOTS from 'vanta/src/vanta.dots';


const About = () => {

    useEffect(() => {
        DOTS({
            el: "#about",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xffffff,
            color2: 0x7d451b,
            backgroundColor: 0xffffff
        })
      }, [])

    return (
        <div id='about' className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 pb-32 pt-16 borderrad">
            <div className="max-w-7xl mx-auto backdrop-blur-sm bg-white rounded-[100px] text-black mt-8 bg-opacity-[0%]">
                <h2 className="text-5xl text-center mb-6 pb-4 opacity-[90%] pt-12">About Us</h2>
                <h3 className='text-lg mb-6 pb-8 text-center opacity-[70%]'>A promise that goes beyond a Mission Statement</h3>
                <div className="flex flex-col-reverse md:flex-row items-center justify-center pb-12">
                    <div className="md:w-1/2 mb-6 md:mb-0 px-0 md:pt-0 sm:pt-14">
                        <img className="p-8 rounded-[60px] mx-auto md:mx-0" src="./key.jpg" alt="Locksmith Team" />
                    </div>
                    <div className="md:w-1/2 p-8">
                        <p className="text-lg mb-4 opacity-[70%]">
                            At Yemanis Locksmith, we take pride in our craft and commitment to serving the Houston community.
                            Established over 5 years ago, we have grown to become a trusted name in the locksmith industry.
                        </p>
                        <p className="text-lg mb-4 opacity-[70%]">
                            With a dedicated team of professionals, we have successfully served over 200 clients,
                            providing prompt and reliable locksmith services tailored to their needs.
                        </p>
                        <p className="text-lg mb-4 opacity-[70%]">
                            Whether you're locked out of your home, need to upgrade your business security,
                            or require emergency assistance, you can count on us to deliver exceptional services
                            with a human touch.
                        </p>
                        <p className="text-lg opacity-[70%]">
                            Our mission is simple: to ensure the safety and security of our customers,
                            providing peace of mind in every lock and key solution we deliver.
                        </p>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default About;