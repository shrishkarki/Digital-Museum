import React, { useContext, useEffect, useState } from 'react';
import { IndexContext } from '../ContextAPi/IndexContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SetNewPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    // const [otpCode, setOtpCode] = useState("");
    const [errorMessage, setErrorMessage]=useState("");
    const {resetToken}=useContext(IndexContext);
    const navigate=useNavigate();
    console.log(resetToken);

    const submitNewPassword=(e)=>{
        e.preventDefault();
        const fd=new FormData();
        fd.append("token",resetToken);
        fd.append("password",newPassword);
       

        axios({
            url:"https://api.yatharup.com/accounts/reset-password/",
            method:"POST",
            data:fd

        }).then(res=>{
            navigate('/Login');
        }).catch(err=>{
            console.log(err.response.data)
        })
    }

    useEffect(()=>{
        !resetToken && navigate('/Login');
    },[])

   
  return (
    <div className='w-full h-[80vh] flex flex-col items-center justify-center text-lg text-center'>

        <p className=' mb-3 font-bold text-2xl'>Please set the new password</p>


        <form onSubmit={submitNewPassword}>
          <input type="text" onChange={(e) => setNewPassword(e.target.value)} required className='border-2 border-amber-500 focus:outline-amber-400 text-base tmd:text-lg px-2 py-1 w-[210px] tmd:w-[320px]' value={newPassword} onFocus={()=>setErrorMessage("")}  placeholder="set a new password"/>
          <p className='text-red-500 text-center'>{errorMessage.error}</p>
          <button type='submit' aria-label="search" className="mx-auto mt-4 flex justify-center focus:bg-amber-700 focus:ring-amber-700 focus:ring-2 focus:ring-offset-2 text-white bg-amber-600 hover:bg-amber-700  py-1 px-3 rounded w-auto relative text-lg lg:text-xl" >
            Reset
          </button>
        </form>

      </div>
  )
}

export default SetNewPassword