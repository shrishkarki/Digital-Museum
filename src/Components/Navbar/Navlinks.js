import React, { useContext, useState } from 'react';
import { Link, useNavigate , NavLink} from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from './logo.png'
import { CgLogIn } from 'react-icons/cg';
import { IndexContext } from '../ContextAPi/IndexContext';




const Navlinks = () => {
    const [nav, setNav] = useState(true);
    const {token,setToken}=useContext(IndexContext);
    const navigate=useNavigate();

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>


            <div className=''>
                <ul className='hidden md:flex h-16 items-center '>
                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14' ><NavLink to="/" style={({ isActive }) => 
                      (isActive ? {color: 'orange'} : {color: 'black'})}>HOME</NavLink></li>

                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14'><NavLink to="/gallery" style={({ isActive }) => 
                      (isActive ? {color: 'orange'} : {color: 'black'})}>GALLERY</NavLink></li>
                      
                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14'><NavLink to="/blog" style={({ isActive }) => 
                      (isActive ? {color: 'orange'} : {color: 'black'})}>BLOG</NavLink></li>
                      
                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14'><NavLink to="/contactUs" style={({ isActive }) => 
                      (isActive ? {color: 'orange'} : {color: 'black'})}>CONTACT US</NavLink></li>

                    <li className='mr-6 md:text-sm lg:text-lg lg:mr-8 xl:mr-14'><NavLink to="aboutUs" style={({ isActive }) => 
                      (isActive ? {color: 'orange'} : {color: 'black'})}>ABOUT US</NavLink></li>
                </ul>
                <div onClick={handleNav} className='sm:flex md:hidden absolute right-0 top-5 px-4'>
                    {nav ? <AiOutlineMenu style={{ fontSize: 40 }} /> : <AiOutlineClose style={{ fontSize: 40 }} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-0 z-20 w-[70%] h-full border-r bg-slate-50  ease-in-out duration-500' : 'fixed left-[-200px]'}>
                    <div className='w-[100%] h-24  bg-white   z-10 flex  items-center  justify-center'>
                       <img src={logo} alt="logo" className='w-[180px]' />

                    </div>
                     
                    <ul className='bg-gradient-to-r from-amber-500 to-slate-500 h-full text-white text-xl text-justify pl-10 pt-4'>
                        <li className='pb-10' ><Link to="/" onClick={()=>setNav(!nav)}>HOME</Link></li>
                        <li className='pb-10'><Link to="/gallery" onClick={()=>setNav(!nav)}>GALLERY</Link></li>
                        <li className='pb-10'><Link to="/blog" onClick={()=>setNav(!nav)}>BLOG</Link></li>
                        <li className='pb-10'><Link to="/contactUs" onClick={()=>setNav(!nav)}>CONTACT US</Link></li>
                        <li className='pb-10'><Link to="/aboutUs" onClick={()=>setNav(!nav)}>ABOUT US</Link></li>
                       { !localStorage.getItem("token") ? <li className='pb-10'><Link to="Login" onClick={()=>setNav(!nav)}>LOGIN  <CgLogIn className='inline-block  text-white text-xl '/></Link> </li>:
                       <li className='pb-10'><Link to="/" onClick={ ()=>{ setToken(localStorage.removeItem("token"), window.location.reload())}}>LOGOUT  <CgLogIn className='inline-block  text-white text-xl '/></Link> </li>
                       }

                    </ul>
                </div>

            </div>

        </>

    )
}

export default Navlinks