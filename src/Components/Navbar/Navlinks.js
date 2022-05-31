import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';




const Navlinks = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>


            <div className=''>
                <ul className='hidden md:flex h-16 items-center '>
                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14' ><Link to="/">HOME</Link></li>
                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14'><Link to="/gallery">GALLERY</Link></li>
                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14'><Link to="/blog">BLOG</Link></li>
                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14'><Link to="/contactUs">CONTACT US</Link></li>
                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14'><Link to="aboutUs">ABOUT US</Link></li>
                </ul>
                <div onClick={handleNav} className='sm:flex md:hidden absolute right-0 top-5 px-4'>
                    {nav ? <AiOutlineMenu style={{ fontSize: 40 }} /> : <AiOutlineClose style={{ fontSize: 40 }} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-0 z-20 w-[20%] h-full border-r border-r-gray-500 bg-slate-50  ease-in-out duration-500' : 'fixed left-[-100px]'}>
                    <ul >
                        <li className='pb-10' ><Link to="/">HOME</Link></li>
                        <li className='pb-10'><Link to="/gallery">GALLERY</Link></li>
                        <li className='pb-10'><Link to="/blog">BLOG</Link></li>
                        <li className='pb-10'><Link to="/contactUs">CONTACT US</Link></li>
                        <li className='pb-10'><Link to="/aboutUs">ABOUT US</Link></li>
                    </ul>
                </div>

            </div>

        </>

    )
}

export default Navlinks