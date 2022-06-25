import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { IndexContext } from '../ContextAPi/IndexContext';


const LoginData = () => {
  const navigate=useNavigate();
  const [errorAuthorized,setErrorAuthorized]=useState("");
  const [visibility, setVisibility]=useState("invisible");
const {setToken}=useContext(IndexContext);
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
     setToken(localStorage.getItem("token"));
     
     navigate("/")
  }).catch(err=>{
console.log(err.response.data)
setErrorAuthorized(err.response.data);
setVisibility("visible")
  })
    
   
  }
  return (
    <form className='W-1/2 flex flex-col  items-center py-10' onSubmit={submitLoginHandler}>
    <div className='mt-12'>
    <h3 className='text-amber-600 text-3xl tracking-[4px] font-extrabold w-full text-center'>WELCOME !</h3>
    <div className='block my-3'>
    
        <label htmlFor='email'>Email:</label>
        <input id='email' type="email" className='border-2 mt-1 block w-[300px] h-10 rounded-md focus:outline-amber-300' onChange={(e)=>updateInputHandler(e)}/>
        
    </div>

    <div className='block my-3'>
    
        <label htmlFor='password'>Password:</label>
        <input id='password' type="password" className='border-2 mt-1 block w-[300px] h-10 rounded-md focus:outline-amber-300' onChange={(e)=>updateInputHandler(e)}/>
        
    </div>
   

    <p className='flex justify-end underline text-amber-400 cursor-pointer'>Forget Password?</p>
    <button type='submit' className='w-full bg-amber-500 mt-2 text-white rounded-md text-2xl py-1'>Login</button>
    <p className='mt-3 text-center'>Don't have an account? <span className='text-amber-400 cursor-pointer' onClick={()=>navigate("/SignUp")}>Sign Up</span></p>
    </div>
</form>
  )
}

export default LoginData