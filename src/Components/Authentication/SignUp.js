import React from 'react';
import Sidebar from '../SharedComponent/Sidebar';
import SignUpData from './SignUpData';

const SignUp = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        <Sidebar/>
        <SignUpData/>
    </div>
  )
}

export default SignUp;