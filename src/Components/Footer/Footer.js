import React from 'react';
import Logo from '../Navbar/logo.png';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <div className='bg-black text-white lg:px-10 lg:py-8  md:px-3 md:py-3'>
                <div className='flex w-full justify-between md:items-center h-auto flex-col-reverse md:flex-row'>
                    <div className='w-full tm:w-full md:w-[50%]'>
                        <h3 className=' font-bold w-full text-center text-2xl tm:w-full tm:text-center  md:text-left tm:text-2xl md:text-xl lg:text-3xl'>About Us</h3>
                        <p className='px-4 pb-6 pt-2 tm:pt-0 text-sm tm:px-4 tm:pb-10 md:pb-0 md:px-0 tm:text-sm text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus.</p>
                    </div>
                    <div className='flex mb-7 gap-7 mx-auto tm:mb-8 tm:gap-10 md:gap-3 tm:mx-auto'>
                        <BsFacebook fontSize={30} className="md:mx-3 lg:mx-8" />
                        <BsInstagram fontSize={30} className="md:mr-3 lg:mr-8" />
                        <BsTwitter fontSize={30} className="md:mr-3 lg:mr-8" />
                    </div>
                    <div className=' flex mx-auto  h-full tm:mx-auto'>
                        <img src={Logo} alt="logo" className='my-7 h-10 tm:my-10 md:my-0  md:w-[200px] lg:w-[280px]  tm:h-12 md:h-16 lg:h-20' />
                    </div>


                </div>
            </div>
            <div className='w-full h-[0.5px] border-amber-800 border-[1px]'></div>
            <div className='flex text-center flex-col-reverse md:flex-row bg-black text-white justify-between md:px-3 lg:px-10  md:py-4 lg:py-5'>
                <p className= 'py-2 tm:pt-4 tm:pb-2 md:p-0'>Copyright&copy; 2021.All right reserved </p>
                <div className='w-full h-[0.5px] border-amber-800 border-[1px] hidden tm:block md:hidden'></div>

                <ul className='hidden tm:flex flex-wrap px-3 py-1 text-center leading-7 tm:leading-none tm:px-5 tm:py-2 md:px-0 md:py-0 justify-between tm:text-sm md:text-base tm:font-extrabold'>
                    <li className='md:mx-5 lg:mr-8'><Link to="/">HOME</Link></li>
                    <li className='md:mr-5 lg:mr-8'><Link to="/gallery">GALLERY</Link></li>
                    <li className='md:mr-5 lg:mr-8'><Link to="/blog">BLOG</Link></li>
                    <li className='md:mr-5 lg:mr-8'><Link to="/contactUs">CONTACT US</Link></li>
                    <li className='md:mr-5 lg:mr-8'><Link to="aboutUs">ABOUT US</Link></li>
                </ul>
                

            </div>
        </>
    )
}

export default Footer