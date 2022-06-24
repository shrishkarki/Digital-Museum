import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';


const LoginData = () => {
  const navigate=useNavigate();
  const [errorAuthorized,setErrorAuthorized]=useState("");
  const [visibility, setVisibility]=useState("invisible");
  const [inputData,setInputData]=useState({

  email:"",password:""})

  const updateInputHandler=(e)=>{
   const newFormInput={...inputData};
   newFormInput[e.target.id]=e.target.value;
   setInputData(newFormInput);
  }

  const submitLoginHandler=(e)=>{
    e.preventDefault();

    const fd=new FormData();
  
    fd.append("email",inputData.email);
    fd.append("password",inputData.password);

    axios({
      // url: "https://digitalmuseum.herokuapp.com/accounts/login/",
      url: "https://api.yatharup.com/accounts/login/",
      method: 'POST',
   
      data: fd
  }).then(res => {
      console.log(res.data)
     localStorage.setItem("token",res.data.access);
     navigate("/")
  }).catch(err=>{
console.log(err.response.data)
setErrorAuthorized(err.response.data);
setVisibility("visible")
  })
    
   
  }
  return (
    <form className='w-full md:w-1/2 flex flex-col justify-center items-center ' onSubmit={submitLoginHandler}>
        <div className='my-12 w-2/3 lg:w-1/2'>
        <h3 className='text-amber-600 text-3xl tracking-[4px] font-extrabold w-full text-center'>WELCOME !</h3>

       
           <p className={`text-red-600 py-2 ${visibility} text-clip` }>{errorAuthorized.detail}</p>

       
        <div className='block my-3'>
        
            <label htmlFor='email'>Email:</label>
            <input id='email' type="email" className='border-2 mt-1 block w-full h-10 rounded-md focus:outline-amber-300' onChange={(e)=>updateInputHandler(e)} onFocus={()=>setErrorAuthorized("")} required/>
            
        </div>

        <div className='block my-3'>
        
            <label htmlFor='password'>Password:</label>
            <input id='password' type="password" className='border-2 mt-1 block w-full h-10 rounded-md focus:outline-amber-300' onChange={(e)=>updateInputHandler(e)} required/>
            
        </div>
       

        <p className='flex justify-end underline text-amber-400 cursor-pointer'>Forget Password?</p>
        <button type='submit' className='w-full bg-amber-500 mt-2 text-white rounded-md text-2xl py-1'>Login</button>
        <p className='mt-3 text-center'>Don't have an account? <span className='text-amber-400 cursor-pointer' onClick={()=>navigate("/SignUp")}>Sign Up</span></p>
        </div>
    </form>
  )
}

export default LoginData