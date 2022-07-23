import React, { useState , useEffect } from 'react';

import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useUserAbout } from '../FetchDatas/DummyJson';




const UserProfileDetail = () => {
  
 
  // const [userDetail,setUserDetail]=useState("")
  const {username ,gallery , posts}=useParams();
  console.log(username, gallery, posts)
  const userAbout=useUserAbout(username);
  const navigate=useNavigate();



  const clickHandle=(targerParam)=>{
  
    navigate(`${targerParam}`)
  }
  return (
    <>
    <div className='text-xl Font-bold w-full flex flex-col justify-center items-center h-52 bg-gradient-to-r from-amber-600 
                     to-slate-800 text-white pl-10'>

       </div>
       <div className="relative flex flex-col items-center w-full   justify-center -mt-20">
    <img className="w-44 h-44 rounded-full" src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="profileImage"/>
    <div className='text-2xl font-extrabold capitalize'>{userAbout?.name}</div>
    <div className='text-lg font-extrabold lowercase text-amber-400'>@{userAbout?.username}</div>
    {/* <span className="top-0 right-80 absolute  w-6 h-6 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
</div>


<div className=''>
  <ul className='flex w-full justify-between px-32  mt-5 bg-gradient-to-r from-amber-500 
                     to-slate-600 text-xl font-bold'>
    <li className={`px-5 py-5 hover:bg-amber-200 cursor-pointer bg-amber-200 `}  onClick={()=>clickHandle(`${username}`)}>About</li>
    <li className={`px-5 py-5 hover:bg-amber-200 cursor-pointer ${gallery? "bg-amber-200":""} `} onClick={()=>clickHandle(`${username}/gallery`)}>Gallery</li>
    <li className={`px-5 py-5 hover:bg-amber-200 cursor-pointer  `}onClick={()=>clickHandle(`${username}/posts`)}>Posts</li>
  </ul>
</div>



<Outlet />


    </>
  )
}

export default UserProfileDetail