import React,{useEffect, useState} from 'react';
import moment from 'moment';
import {HiOutlineMail,HiOutlineClock} from 'react-icons/hi';
import {RiHome7Line, RiPhoneLine} from 'react-icons/ri';
import {CgAdd} from 'react-icons/cg';

import { useParams} from 'react-router-dom';
import { useUserAbout } from '../FetchDatas/DummyJson';


const UserAbout = () => {

  const {username}=useParams();
  const userDetail=useUserAbout(username);
  

 
  if(userDetail){
    var { address, date_joined, email, phone } = userDetail
    let check = moment(date_joined, 'YYYY/MM/DD');
    var date = check.format('D');
    var month = check.format("MMMM");
    var year = check.format("YYYY");
  }

  return (
    <div className='px-32  py-8 w-full  bg-[#F0F2F5]'>
      <div className=' bg-white px-5 pt-4 rounded-lg'>

     
      <h1 className='text-2xl font-extrabold  '>INTRO</h1>


      <div className='text-xl mt-8 '>

      
<div className=' leading-[40px] tracking-[1.5px]  capitalize font-medium'> <span >< HiOutlineMail className='inline-block text-[24px] text-orange-500'/></span><span className='font-bold'> Email :</span> {email}</div>
    <div className='leading-[40px] tracking-[1.5px]  capitalize font-medium'> <span >< RiHome7Line className='inline-block text-[24px] text-orange-500'/></span> <span className=' font-bold'>Address :</span> {address}</div>
    
    <div className='leading-[40px] tracking-[1.5px]  capitalize font-medium'> <span >< RiPhoneLine className='inline-block text-[24px] text-orange-500'/></span>  <span className=' font-bold'>Phone Number :</span> {phone}</div>
    <div className='leading-[40px] tracking-[1.5px]  capitalize font-medium'> <span >< HiOutlineClock className='inline-block text-[24px] text-orange-500'/></span> <span className=' font-bold'>Date Joined :</span> {date} {month} {year}</div>

        <button aria-label="search" className="focus:bg-amber-700 focus:ring-amber-700 focus:ring-2 focus:ring-offset-2 text-white bg-amber-600 hover:bg-amber-700 mt-5 mb-7  px-3 py-2 text-center  rounded w-full sm:w-auto relative text-lg ">
        <CgAdd className='inline-block text-[22px] -mt-1'/> Add More Details
        </button>
      </div>


      </div>
 
    </div>
  )
}

export default UserAbout