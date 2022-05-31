import React from 'react'

const Container = ({image,title}) => {
  return (
      <div className='text-xl Font-bold w-full flex justify-center h-96 bg-gradient-to-r from-amber-600 
                     to-slate-800'>
       <img src={image} alt="hello" className='w-full h-full object-center mix-blend-overlay' />
       <p className='absolute flex h-96 items-center text-7xl font-bold text-white'>{title}</p>
       </div>
  )
}

export default Container;