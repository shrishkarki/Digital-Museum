import React from 'react';
import Sidebar from '../SharedComponent/Sidebar';
import LoginData from './LoginData';

const Login = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        <Sidebar/>
        <LoginData/>
    </div>
  )
}

export default Login