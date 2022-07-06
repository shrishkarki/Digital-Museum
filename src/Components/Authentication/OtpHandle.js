import React,{useContext, useEffect, useState} from 'react';
import { IndexContext } from '../ContextAPi/IndexContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OtpHandle = () => {
    const {emailAddress}=useContext(IndexContext);
    const navigate=useNavigate();
    
    const [otp,setOtp]=useState("");
    const [otpStatus , setOtpStatus]=useState("");


useEffect(()=>{
  if(!emailAddress){
    navigate('/SignUp');
    
  }
},[])



   const submitOTPHandler=(e)=>{
e.preventDefault();
const fd=new FormData();
fd.append("email",emailAddress);
fd.append("otp",otp);



axios({
  url:"https://api.yatharup.com/accounts/verify-register-otp/",
  method:"POST",
//   headers: {
//     authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1NTQ5NzExLCJpYXQiOjE2NTQwMTM3MTEsImp0aSI6ImYwZjk3MjQ1N2I4MDQ0Njg5ZTlkM2Q0ZDQ4MjEzZWE2IiwidXNlcl9pZCI6MX0.XiHcrtaS0eFXkNV7OLaVAZrpDyX7ey4ikxYnfN_4x0g"
// },
data: fd
}).then(res => {
  console.log(res.data);
  navigate('/')
 
}).catch(err=>{
  
  setOtpStatus(err.response.data)  
})

   }
  return (
    <div className='w-full h-[50vh] flex flex-col items-center justify-center text-lg text-center'>

      <p >Please enter otp to verify your account</p>
      <p className='my-4'>An otp has sent to <span className='text-amber-500 font-bold '>{emailAddress}</span></p>
   
    <form onSubmit={submitOTPHandler} className="">
    <input type="number" onChange={(e)=>setOtp(e.target.value)} required className='border-2 border-amber-500 focus:outline-amber-400' onFocus={()=>setOtpStatus("")}/>
    <p className='text-red-500 text-center'>{otpStatus.error}</p>
    <button type='submit'  aria-label="search" className="mx-auto mt-4 flex justify-center focus:bg-amber-700 focus:ring-amber-700 focus:ring-2 focus:ring-offset-2 text-white bg-amber-600 hover:bg-amber-700  py-1 px-3 rounded w-full sm:w-auto relative text-lg lg:text-xl" >
                   Verify
                  </button>
    </form>
    
    </div>
    
  )
}

export default OtpHandle;