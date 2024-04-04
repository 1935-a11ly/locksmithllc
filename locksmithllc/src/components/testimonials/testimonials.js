import React from 'react';
import '../../App.css';

const Testimonials = () => {
    return (
        <>
        <div className='bg-[#130a07] w-full h-fit pb-12'>
            <div className='text-white text-center pt-12'>
                <div className='flex justify-center align-center pb-8'>
                    <img src='./ylogo.png' className='  w-[120px] h-[120px] rounded-full'></img>
                </div>
                <h1 className='text-5xl'>Reach Out to Us for Expert Locksmith Services</h1>
                <h3 className='text-lg pt-8 pb-16 opacity-[60%]'> Need help with your locks? Don't hesitate to contact us. Our team of expert locksmiths is always ready to assist you</h3>
            </div>
            <div className='text-center flex justify-center align-center pb-0 text-white opacity-[80%] space-x-12'>
                <h1 className='text-4xl'>50+ <br></br> Years of Experience</h1>
                <h1 className='text-4xl'>125+ <br></br> Satisfied Customers</h1>
                <h1 className='text-4xl'>5+ <br></br> Years in Business</h1>
                <h1 className='text-4xl'>100+ <br></br> Lockouts Completed</h1>
            </div>
            <h3 className='text-lg text-center pt-16 pb-6 opacity-[80%] text-[#fbd8a0]'>Don't just take our word for it. Take a peak at what out customers have to say</h3>
            <div className='pt-0 animate-bounce flex justify-center align-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-white">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
            </div>

        </div>
        <div className='pb-28'>
            <div className='text-center pt-8'>
                <h3 className='text-lg pt-20 text-[#48341c]'> Testimonials </h3>
                    <div className='flex justify-center align-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                <h1 className='text-5xl pt-4 pb-24'>Voices of Satisfied Customers</h1>
            </div>
            <div className="slider2 bg-transparent w-full ">
                <div className="slide-track2 bg-transparent">




                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide2 mx-20">
                        <div className="shadow-md w-[440px] h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-xl p-2 backdrop-blur-sm ">
                            <div className="flex gap-2">
                                <img alt="" src= './reactlogo.png' className="bg-base-300 w-16 h-16 shrink-0 rounded-full object-contain mt-[19px]" />
                                <div className="flex flex-col text-white">
                                    <span className="text-sm text-black px-2 pt-4 opacity-[80%]">"Exceptional locksmith service! Quick, reliable, and professional."</span>
                                    <p className="line-clamp-3 font-bold text-[#48341c] text-[18px] bg-base-300 rounded-lg p-2">
                                        Rob M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

        </> 
    );
};

export default Testimonials;