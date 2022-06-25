import React from 'react';
import LoginData from '../Authentication/LoginData';

const ModalLoginPopup = ({ close }) => {
  return (
    <>
      <div className='fixed top-0 left-0  bg-black opacity-50  h-full   z-40 w-full  flex justify-center'>



      </div>
      <div className=' fixed top-0 left-0 right-0 z-50  w-full flex justify-center'>
        
        <div className='relative flex justify-center w-full rounded-xl relative'>
          <div className='bg-white'>
          <LoginData />

<button className='text-black absolute top-0 right-0' onClick={() => close(false)}>Close </button>
          </div>
         
        </div>

      </div>
    </>
  )
}

export default ModalLoginPopup