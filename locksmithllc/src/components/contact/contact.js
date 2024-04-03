import React from 'react';

const Contact = () => {
    return (
    
    <>
        <h3 className='text-lg pt-20 text-[#48341c] px-24'> Contact Us </h3>
        <h1 className='text-5xl pt-4 px-24 pb-20'>Let's Lock In !</h1>
        <form className="px-7 pb-32 grid justify-center items-center iphone">
            <div className="grid gap-6 mt-[160px]" id="form">
                <div className='flex justify-center items-center mb-[30px]'>
                    <img src='./ylogo.png' className=' mx-4 inline w-[50px] h-[50px] rounded-full'></img>
                    <span className='block text-[#48341c] w-[250px] text-wrap'>Key in a few of your details and connect with a live representativ.</span>
                </div>
                <div className="w-full flex gap-3">
                    <input className="border-l-[1px] shadow-lg border-[#48341c] capitalize p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder="First Name" id="First-Name" name="First-Name" required />
                    <input className="border-l-[1px] shadow-lg border-[#48341c] p-3 capitalize glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name"required />
                </div>
                <div className="grid gap-6 w-full">
                    <input className="border-l-[1px] shadow-lg border-[#48341c] p-3 glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email" required/>
                    <input className="border-l-[1px] shadow-lg border-[#48341c] p-3 glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" required="" />
                </div>
                <div className=''>
                    <button className="outline-none glass w-full bg-[#48341c] rounded-xl font-bold p-[11px] text-white" type="submit">Get In Touch</button>
                    <div className='flex justify-center items-center'>
                        <button className="flex justify-center items-center mt-14 outline-none glass w-[78px] h-[78px] bg-[#008000] animate-bounce font-bold p-[11px] text-white rounded-full" type="submit"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <h3 className='text-lg text-[#48341c] block pt-4'> Call Now For Emergency Lockout Assistance </h3>
                    </div>
                </div>
            </div>
        </form>
    </>

    );
};

export default Contact;