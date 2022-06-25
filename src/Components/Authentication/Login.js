import React from 'react';
import Sidebar from '../SharedComponent/Sidebar';
import LoginData from './LoginData';

const Login = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        <Sidebar/>


        <div className='flex w-full md:w-1/2 justify-center'>
        <LoginData/>

        </div>
        
    </div>
  )
}

export default Login