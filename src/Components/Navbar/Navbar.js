import React, { useContext, useState } from 'react';
import logo from './logo.png'
import './Navbar.css'
import Navlinks from './Navlinks';
import { CgLogIn } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { IndexContext } from '../ContextAPi/IndexContext';
import UserProfile from './UserProfile';


const Navbar = () => {
  // const {token ,setToken}=useContext(IndexContext);
  const [statusDropdown, setStatusDropdown]=useState(false);

  const clickHandle=()=>{
    localStorage.removeItem("token"); 
 window.location.reload()
  }
  

  // useEffect(()=>{
  //   if(localStorage.getItem("token")){
  //     setToken(token)
  //   }
  // },[])
  const navigate=useNavigate();
  return (
    <div className='flex h-auto ' >
      <div className='logo hidden  md:w-[320px] lg:w-[400px]  xl:w-[450px] h-24  bg-white shadow-2xl  z-10 md:flex justify-center items-center'>
      <img src={logo} alt="logo" className='md:w-[190px] lg:w-[170px] xl:w-[200px]'/>
    
      </div>
      <div className=' h-20 sm:h-24  z-10 px-4  md:hidden  flex items-center '>
      <img src={logo} alt="logo" className=' w-[140px] sm:w-[180px]'/>
    
      </div>

      <div className='flex flex-col md:absolute md:left-52 lg:left-60  xl:left-80' >
          <div className='nav-top  lg:w-[776px] xl:w-[900px] h-10 bg-stone-800  hidden md:flex justify-end md:pr-[45px] lg:pr-[68px] xl:pr-[80px]'>

          
              <div className='nav-inner w-[200px] h-10 bg-amber-500 ' >
                {!localStorage.getItem("token") ? <div className='flex justify-center items-center  h-full w-full' onClick={()=>navigate("Login")}>
                <button className='font-bold text-xl tracking-[1.5px] text-white'>Login&nbsp;</button>
                <CgLogIn className='text-white text-xl mt-1'/>
                </div>: <UserProfile setStatusDropdown={setStatusDropdown} statusDropdown={statusDropdown}/>}
               
              </div>
              
                
          </div>
          {statusDropdown && <ul className='bg-slate-200 cursor-pointer absolute top-10 right-0 text-black  text-center  z-50 rounded-sm mt-2 mr-[113px]'>
            <li className=' pt-3 px-4 pb-1 hover:bg-slate-300' onClick={()=>navigate(`userprofile/${localStorage.getItem("username")}`)}>View Profile</li>
            <li className='flex px-4 pb-3 pt-1 hover:bg-slate-300' onClick={clickHandle}>Sign out
            <CgLogIn className='text-black text-xl mt-1 '/>
            </li>
           
          </ul>}
          <div className='md:pl-[115px] lg:pl-52  xl:pl-40 '>
             
                <Navlinks/>
          </div>
      </div>

{/* <div className='flex flex-col md:absolute md:left-52 lg:left-60  xl:left-80' >
          <div className='nav-top  lg:w-[776px] xl:w-[900px] h-8 bg-stone-800  hidden md:flex justify-end md:pr-[45px] lg:pr-[68px] xl:pr-[80px]'>

          
              <div className='nav-inner w-[200px] h-8 bg-amber-500 ' >
                {!localStorage.getItem("token") ? <div className='flex justify-center items-center  h-full w-full' onClick={()=>navigate("Login")}>
                <button className='font-bold text-xl tracking-[1.5px] text-white'>Login&nbsp;</button>
                <CgLogIn className='text-white text-xl mt-1'/>
                </div>:<UserProfile/>}
               
              </div>
              
                
          </div>
          <div className='md:pl-[115px] lg:pl-52  xl:pl-40 '>
             
                <Navlinks/>
          </div>
      </div> */}
          



    </div>
  )
}

export default Navbar;