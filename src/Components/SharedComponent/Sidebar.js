import React from 'react';
// import LumbiniImage from '../../assets/pic1.jpg'

const Sidebar = () => {
  return (
<div className='w-1/2 h-auto bg-gradient-to-r from-amber-700 
                     to-slate-800  relative'>
    {/* <img src={LumbiniImage} alt="museum"  className="block w-full h-full  mix-blend-overlay" /> */}

    <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center'>
    <p className='uppercase text-white text-5xl font-extrabold tracking-[5px]'>digital museum</p>
<p className='text-white px-12 text-justify mt-2 font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
    </div>

    </div>
  )
}

export default Sidebar