import React from 'react';
// import LumbiniImage from '../../assets/pic1.jpg'

const Sidebar = () => {
  return (
<div className='w-full md:w-1/2 h-52 md:h-auto bg-gradient-to-r from-amber-700 
                     to-slate-800  relative'>
    {/* <img src={LumbiniImage} alt="museum"  className="block w-full h-full  mix-blend-overlay" /> */}

    <div className='md:absolute md:top-0 w-full h-full flex flex-col justify-center items-center'>
    <p className='uppercase text-white text-5xl font-extrabold tracking-[5px]'>Yatharup</p>
<p className='text-white px-12 text-justify mt-2 font-bold text-2xl tracking-[2px] mt-3'>Let's Get Connected</p>
    </div>

    </div>
  )
}

export default Sidebar