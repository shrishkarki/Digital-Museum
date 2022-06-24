import React, { useContext, useState } from 'react';
import axios from 'axios';
import { IndexContext } from '../ContextAPi/IndexContext';
import { useNavigate } from 'react-router-dom';

const SignUpData = () => {

    const { setEmailAddress } = useContext(IndexContext);
    const navigate = useNavigate();

    // console.log(emailAddress);

    const [formInput, setFormInput] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
        phonenumber: "",
        // address: ""

    });

    const [alreadyExistInfo, setAlreadyExistInfo] = useState({
        existEmail: "",
        existUsername: ""

    })
    console.log(alreadyExistInfo)

    const handlingInputHandler = (e) => {
        const newFormInput = { ...formInput };
        newFormInput[e.target.id] = e.target.value;

        setFormInput(newFormInput);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        setEmailAddress(formInput.email)


        const fd = new FormData();
        fd.append("username", formInput.username);
        fd.append("name", formInput.fullname);
        fd.append("email", formInput.email);
        fd.append("password", formInput.password);
        fd.append("phone", formInput.phonenumber);
        // fd.append("address",formInput.address);

        console.log(fd);


        axios({
            url: "https://api.yatharup.com/accounts/register/",
            method: 'POST',

            data: fd
        }).then(res => {
            console.log(res.data)
            navigate("Verify-OTP")
        }).catch(err => {
            console.log(err.response.data)

            const { username, email } = err.response.data;

            setAlreadyExistInfo({
                existEmail: email,
                existUsername: username
            });

        })


    }



    return (
        <form className='w-full  md:w-1/2  flex flex-col justify-center  items-center ' onSubmit={submitHandler}>
            <div className='my-12 w-2/3 lg:w-1/2'>
                <h3 className='text-amber-600 text-3xl tracking-[4px] font-extrabold w-full text-center'>Sign Up</h3>
                <p className='text-center my-4'>Already have an account ? <span className='text-amber-400 cursor-pointer' onClick={() => navigate("/Login")}>Log in</span> </p>

                <div className='text-red-500 text-xs capitalize text-center'>
                    {alreadyExistInfo.existEmail && <p>{alreadyExistInfo.existEmail.toString()}</p>}
                    {alreadyExistInfo.existUsername && <p>{alreadyExistInfo.existUsername.toString()}</p>}
                </div>

                <div className='block my-3'>



                    <label htmlFor='email'>Email:</label>
                    <input id='email' type="email" className='border-2 mt-1 block w-full  h-10 rounded-md focus:outline-amber-300' onChange={(e) => handlingInputHandler(e)} required onFocus={()=>setAlreadyExistInfo({ existEmail: "",
        existUsername: ""})}/>

                </div>
                <div className='block my-3'>

                    <label htmlFor='username'>Username:</label>
                    <input id='username' type="text" className='border-2 mt-1 block w-full  h-10 rounded-md focus:outline-amber-300' autoComplete='false' onChange={(e) => handlingInputHandler(e)} required onFocus={()=>setAlreadyExistInfo({ existEmail: "",
        existUsername: ""})}/>

                </div>

                <div className='block my-3'>

                    <label htmlFor='fullname'>FullName:</label>
                    <input id='fullname' type="text" className='border-2 mt-1 block w-full  h-10 rounded-md focus:outline-amber-300' autoComplete='false' onChange={(e) => handlingInputHandler(e)} required />

                </div>


                <div className='block my-3'>

                    <label htmlFor='password'>Password:</label>
                    <input id='password' type="password" className='border-2 mt-1 block w-full  h-10 rounded-md focus:outline-amber-300' onChange={(e) => handlingInputHandler(e)} required />

                </div>
                {/* <div className='block my-3'>

                    <label htmlFor='address'>Address:</label>
                    <input id='address' type="text" className='border-2 mt-1 block w-full  h-10 rounded-md focus:outline-amber-300' onChange={(e) => handlingInputHandler(e)} required />

                </div> */}
                <div className='block my-3'>

                    <label htmlFor='phonenumber'>Mobile Number:</label>
                    <input id='phonenumber' type="number" className='border-2 mt-1 block w-full  h-10 rounded-md focus:outline-amber-300' onChange={(e) => handlingInputHandler(e)} required />

                </div>



                <button type='submit' className='w-full bg-amber-500 mt-2 text-white rounded-md text-2xl py-1' >Sign Up</button>
                {/* <p className='mt-3 text-center'>Don't have an account? <span className='text-amber-400 cursor-pointer'>Sign Up</span></p> */}
            </div>
        </form>
    )
}

export default SignUpData