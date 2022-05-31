import React from 'react';
import logo from './logo.png'
import './Navbar.css'
import Navlinks from './Navlinks';

const Navbar = () => {
  return (
    <div className='flex h-auto ' >
      <div className='logo hidden  md:w-[320px] lg:w-[400px]  xl:w-[450px] h-24  bg-white shadow-2xl  z-10 md:flex justify-center items-center'>
      <img src={logo} alt="logo" className='md:w-[190px] lg:w-[170px] xl:w-[200px]'/>
    
      </div>
      <div className=' h-20 sm:h-24  z-10 px-4  md:hidden  flex items-center '>
      <img src={logo} alt="logo" className=' w-[140px] sm:w-[180px]'/>
    
      </div>

      <div className='flex flex-col md:absolute md:left-52 lg:left-60  xl:left-80' >
          <div className='nav-top  lg:w-[776px] xl:w-[900px] h-8 bg-stone-800  hidden md:flex justify-end md:pr-[45px] lg:pr-[68px] xl:pr-[80px]'>
              <div className='nav-inner w-[200px] h-8 bg-amber-500 ' ></div>
                
          </div>
          <div className='md:pl-[115px] lg:pl-52  xl:pl-40 '>
             
                <Navlinks/>
          </div>
      </div>
          

    </div>
  )
}

export default Navbar;