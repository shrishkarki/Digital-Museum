import React from 'react'

const Container = ({image,title}) => {
  return (
      <div className='text-xl Font-bold w-full flex flex-col justify-center h-52 bg-gradient-to-r from-amber-600 
                     to-slate-800 text-white pl-10'>
       {/* <img src={image} alt="hello" className='w-full h-full object-center mix-blend-overlay' /> */}
       <p className='text-4xl font-extrabold tracking-[2px]'>{title}</p>
       <p className='mt-4 tracking-[1px]'>Welcome to our blog section !!</p>
       </div>
  )
}

export default Container;