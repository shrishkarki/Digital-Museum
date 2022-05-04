import React from 'react';
import logo from './logo.png'
import './Navbar.css'
import Navlinks from './Navlinks';

const Navbar = () => {
  return (
    <div className='flex h-auto overflow-x-hidden' >
      <div className='logo hidden  w-[450px] h-24  bg-slate-50 z-10 md:flex justify-center items-center'>
      <img src={logo} alt="logo" className=' w-[200px]'/>
    
      </div>
      <div className=' h-24  z-10  md:hidden'>
      <img src={logo} alt="logo" className=' w-[100px]'/>
    
      </div>

      <div className='flex flex-col md:absolute md:left-[240px] fixed right-0' >
          <div className='nav-top w-[900px] h-8 bg-stone-800  hidden md:flex justify-end pr-[80px]'>
              <div className='nav-inner w-[200px] h-8 bg-amber-500 ' ></div>
                
          </div>
          <div className='md:pl-80 '>
             
                <Navlinks/>
          </div>
      </div>
        

    </div>
  )
}

export default Navbar;