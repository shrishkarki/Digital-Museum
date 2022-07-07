import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IndexContext } from '../ContextAPi/IndexContext';

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [errorMessage, setErrorMessage]=useState("");

  const [sendSuccess, setSendSuccess] = useState("");
  const navigate=useNavigate();

  const {setResetToken}=useContext(IndexContext);

  const submitResetHandler = (e) => {
    e.preventDefault();


    axios({
      url: `https://api.yatharup.com/accounts/send-reset-password-otp/?email=${email}`,
      method: "GET",

    }).then(res => {
      setSendSuccess(res.data.success);
      setErrorMessage("")


    }).catch(err => {
      console.log(err.response.data)
      setErrorMessage(err.response.data)

      // setOtpStatus(err.response.data)  
    })

  }




  const submitOtpHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("email", email);
    fd.append("otp", otpCode);

    axios({
      url: "https://api.yatharup.com/accounts/verify-reset-password-otp/",
      method:"POST",
      data:fd
    }).then((res)=>{
      console.log(res.data)
      setResetToken(res.data.token)
      navigate('setnewpassword');
      
    }).catch(err=>{
      setErrorMessage(err.response.data)
      
    })
  }

  return (
    <>
      {!sendSuccess ? <div className='w-full h-[80vh] flex flex-col items-center justify-center text-lg text-center'>

        <p className=' mb-3 font-bold text-2xl'>Please enter the email</p>


        <form onSubmit={submitResetHandler}>
          <input type="text" onChange={(e) => setEmail(e.target.value)} required className='border-2 border-amber-500 focus:outline-amber-400 text-base tmd:text-lg py-1 w-[210px] tmd:w-[320px]' value={email} onFocus={()=>setErrorMessage("")} />
          <p className='text-red-500 text-center'>{errorMessage.error}</p>
          <button type='submit' aria-label="search" className="mx-auto mt-4 flex justify-center focus:bg-amber-700 focus:ring-amber-700 focus:ring-2 focus:ring-offset-2 text-white bg-amber-600 hover:bg-amber-700  py-1 px-3 rounded w-auto relative text-lg lg:text-xl" >
            Submit
          </button>
        </form>

      </div> :


        <div className='w-full h-[80vh] flex flex-col items-center justify-center text-lg text-center'>

          <p className=' mb-3 font-bold text-2xl'>{sendSuccess}</p>


          <form onSubmit={submitOtpHandler}>
            <input type="text" onChange={(e) => setOtpCode(e.target.value)} required className='border-2 border-amber-500 focus:outline-amber-400 text-base tmd:text-lg py-1 w-[200px] tmd:w-[300px]' value={otpCode} onFocus={()=>setErrorMessage("")}/>
            <p className='text-red-500 text-center'>{errorMessage.error}</p>
            <button type='submit' aria-label="search" className="mx-auto mt-4 flex justify-center focus:bg-amber-700 focus:ring-amber-700 focus:ring-2 focus:ring-offset-2 text-white bg-amber-600 hover:bg-amber-700  py-1 px-3 rounded w-auto relative text-lg lg:text-xl" >
              Verify
            </button>
          </form>

        </div>}
    </>
  )

}

export default ResetPassword;