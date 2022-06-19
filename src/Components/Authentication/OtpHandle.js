import React,{useContext, useState} from 'react';
import { IndexContext } from '../ContextAPi/IndexContext';
import axios from 'axios';

const OtpHandle = () => {
    const {emailAddress}=useContext(IndexContext);
    const [otp,setOtp]=useState("");
   const submitOTPHandler=(e)=>{
e.preventDefault();
const fd=new FormData();
fd.append("email",emailAddress);
fd.append("otp",otp);

console.log(fd);

axios({
  url:"https://api.yatharup.com/accounts/verify-register-otp/",
  method:"POST",
//   headers: {
//     authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1NTQ5NzExLCJpYXQiOjE2NTQwMTM3MTEsImp0aSI6ImYwZjk3MjQ1N2I4MDQ0Njg5ZTlkM2Q0ZDQ4MjEzZWE2IiwidXNlcl9pZCI6MX0.XiHcrtaS0eFXkNV7OLaVAZrpDyX7ey4ikxYnfN_4x0g"
// },
data: fd
}).then(res => {
  console.log(res.data)
 
}).catch(err=>{
  console.log(err)   
})

   }
  return (
    <>
    <div>{emailAddress}</div>
    <form onSubmit={submitOTPHandler}>
    <input type="number" onChange={(e)=>setOtp(e.target.value)} required className='border-2 border-black' />
    <button type="submit">GO</button>
    </form>
    
    </>
    
  )
}

export default OtpHandle;