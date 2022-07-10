import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import showPassword from '../../assets/showpw.svg';
import hidePassword from '../../assets/hidepw.svg';
import { Link } from 'react-router-dom';


const LoginData = () => {
  const navigate = useNavigate();
  const [errorAuthorized, setErrorAuthorized] = useState("");
  const [visibility, setVisibility] = useState("invisible");
  const [passwordShown, setPasswordShown] = useState(false);
  const [focusState, setFocusState] = useState(false);


  const [inputData, setInputData] = useState({

    email: "", password: ""
  })

  const updateInputHandler = (e) => {
    const newFormInput = { ...inputData };
    newFormInput[e.target.id] = e.target.value;
    setInputData(newFormInput);
  }

  const functionWrapper=()=>{
    setFocusState(true);
    setErrorAuthorized("")
  }

  const submitLoginHandler = (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("email", inputData.email);
    fd.append("password", inputData.password);

    axios({

      url: "https://api.yatharup.com/accounts/login/",
      method: 'POST',

      data:fd
    }).then(res => {

      localStorage.setItem("token", res.data.access);
     

      navigate("/")
    }).catch(err => {

      setErrorAuthorized(err.response.data);
      setVisibility("visible")
    })


  }
  return (
    <form className=' flex flex-col  items-center justify-center py-10' onSubmit={submitLoginHandler}>
      <div className='mt-12'>
        <h3 className='text-amber-600 text-3xl tracking-[4px] font-extrabold w-full text-center'>WELCOME !</h3>
        <p className={`text-red-600 pl-2 py-2 h-3 ${visibility} text-clip`}>{errorAuthorized.detail}</p>
         {/* <p className={`text-red-600 pl-2  ${visibility} `}>{errorAuthorized.detail}</p> */}
        <div className='block my-3'>

          <label htmlFor='email'>Email:</label>
          <input id='email' type="email" className='border-2 mt-1 block w-[300px] h-10 rounded-md focus:outline-amber-300 pl-2' onChange={(e) => updateInputHandler(e)} required onFocus={()=>setErrorAuthorized("")} />

        </div>


        <label htmlFor='password'>Password:</label>
        <div className={`my-3 relative  border-2 mt-1 flex w-[300px] h-10 rounded-md  ${focusState ? "border-amber-300" : ""} `}  >

          <input id='password' type={passwordShown ? "text" : "password"} className='block outline-none   border-none w-[250px] pl-2' onChange={(e) => updateInputHandler(e)} onFocus={()=>functionWrapper()}  onBlur={() => setFocusState(false)} required />

          
          <img
            alt='img'
            src={passwordShown ? hidePassword : showPassword}
            onClick={() => setPasswordShown(!passwordShown)}
            className="absolute right-2 w-[20px] top-2"
          />

        </div>


        <p className='flex justify-end underline text-amber-400 cursor-pointer'><Link to="/resetpassword">Forget Password?</Link> </p>
        <button type='submit' className='w-[300px] bg-amber-500 mt-2 text-white rounded-md text-2xl py-1'>Login</button>
        <p className='mt-3 text-center'>Don't have an account? <span className='text-amber-400 cursor-pointer' onClick={() => navigate("/SignUp")}>Sign Up</span></p>
      </div>

    </form>
  )
}

export default LoginData