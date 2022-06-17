import React from 'react';
import Sidebar from '../SharedComponent/Sidebar';
import SignUpData from './SignUpData';

const SignUp = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <SignUpData/>
    </div>
  )
}

export default SignUp;