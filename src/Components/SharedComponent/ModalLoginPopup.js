import React from 'react';
import LoginData from '../Authentication/LoginData';

const ModalLoginPopup = ({ close }) => {
  return (
    <>
       <div className='fixed top-0 left-0  bg-black opacity-50  h-full   z-40 w-full  flex  justify-center'>



</div>
<div className=' fixed top-0 left-0 right-0 z-50 mt-20 w-full  flex justify-center '>
  
  <div className='bg-white px-5 pb-3  rounded-xl relative'>
    <LoginData />

    <button className='text-black absolute top-0 right-0' onClick={() => close(false)}>Close </button>
  </div>

</div>
    </>
  )
}

export default ModalLoginPopup