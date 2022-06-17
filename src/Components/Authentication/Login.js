import React from 'react';
import Sidebar from '../SharedComponent/Sidebar';
import LoginData from './LoginData';

const Login = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <LoginData/>
    </div>
  )
}

export default Login