import React, { useState } from 'react';
// import Home from '../NavBar-Category/Home';
// import Blog from '../NavBar-Category/Blog';
// import Gallery from '../NavBar-Category/Gallery';
// import Contact from '../NavBar-Category/Contact';
// import About from '../NavBar-Category/About';
import {  Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navlinks = () => {
    const [nav,setNav]=useState(true);

    const handleNav=()=>{
        setNav(!nav)
    }
    return (
        <>
       

        <div className=''>
        <ul className='hidden md:flex h-16 items-center '>
            <li className='mr-8 lg:mr-10 xl:mr-14' ><Link to="/">HOME</Link></li>
            <li className='mr-8 lg:mr-10 xl:mr-14'><Link to="/gallery">GALLERY</Link></li>
            <li className='mr-8 lg:mr-10 xl:mr-14'><Link to="/blog">BLOG</Link></li>
            <li className='mr-8 lg:mr-10 xl:mr-14'><Link to="/contactUs">CONTACT US</Link></li>
            <li className='mr-8 lg:mr-10 xl:mr-14'><Link to="aboutUs">ABOUT US</Link></li>
        </ul>
        <div onClick={handleNav} className='sm:block md:hidden'>
       {nav?<MenuIcon/>:<CloseIcon/>}
        </div>
         <div className={!nav ?'fixed left-0 top-0 z-20 w-[20%] h-full border-r border-r-gray-500 bg-slate-50  ease-in-out duration-500': 'fixed left-[-100px]'}>
        <ul >
            <li className='pb-10' ><Link to="/">HOME</Link></li>
            <li className='pb-10'><Link to="/gallery">GALLERY</Link></li>
            <li className='pb-10'><Link to="/blog">BLOG</Link></li>
            <li className='pb-10'><Link to="/contactUs">CONTACT US</Link></li>
            <li className='pb-10'><Link to="/aboutUs">ABOUT US</Link></li>
        </ul>
        </div>
        {/* <Routes>
            <Route index element={<Home/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='contactUs' element={<Contact/>}/>
            <Route path='aboutUs' element={<About/>}/>
        </Routes> */}
        </div>
        
        </>
        
    )
}

export default Navlinks