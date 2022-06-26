import React, { useEffect, useRef, useState } from 'react';
import CreateImage from '../../assets/kudan1.jpg';
import Container from '../SharedComponent/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import authHeader from '../SharedComponent/AuthHeader';
import { useCategory } from '../FetchDatas/DummyJson';



const CreateBlogs = () => {
    const navigate=useNavigate();
    const categoriesList=useCategory();
    const ref=useRef();


    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
    },[])
   
    const URL = "https://api.yatharup.com/blogs/";
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        body: "",
    })
    const [images, setImages] = useState("");
    
    const inputHandler = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.id] = e.target.value;
        setFormData(newFormData);
    }

    const imageHandler = (e) => {
        setImages(e.target.files)
    }




    const submitHandler = (e) => {
        e.preventDefault();
        var fd = new FormData();
        // fd.set('results',JSON.stringify( formData))
        // console.log(fd);
        fd.append('title', formData.title)
        fd.append('category', formData.category)
        fd.append('body', formData.body)
        console.log(fd)

        for (var x = 0; x < images.length; x++) {
            fd.append('images', images[x])
        }
       
       
        axios({
            url: URL,
            method: 'POST',
            headers:authHeader(),
            data: fd
        }).then(res => {
            console.log(res.data)
            alert("Blogs Added successfully !!")
        }).catch((err)=>{

            console.log(err.response.data)
            // {err.response && console.log(err.response.data)}
        })

        setFormData({
            title: "",
            category: "",
            body: "",
        })
        ref.current.value = "";

    }




    return (
        <>
            <Container title="Create a new blog" image={CreateImage} />
           

            <form className='  w-[90%] tm:w-[80%] tmd:w-[70%] md:w-[50%]  mx-auto' onSubmit={submitHandler}>
                <h1 className='text-xl tmd:text-3xl font-extrabold py-5'>BLOG POST</h1>
                <div className='w-full border-b-2 border-grey-500 mb-7'></div>

                <div>
                    <label htmlFor='title ' className='text-lg tmd:text-2xl font-bold'>Title *</label>
                    <input type="text" id="title" className='w-full block  border-2 border-solid border-black rounded-lg focus:outline-amber-500 py-1 text-xl' value={formData.title} required onChange={(e) => inputHandler(e)} autoFocus/>
                </div>

                <div className='my-9'>
                    <select name="category" id="category" className='w-full block  py-1 text-lg tmd:text-2xl font-bold border-2 border-solid border-black rounded-lg focus:outline-amber-500'  onChange={(e) => inputHandler(e)} value={formData.category} required>

                        <option value="">CHOOSE YOUR CATEGORY </option>
                        {categoriesList && categoriesList.map(category => {
                            return <option value={category.name} key={category.id} required>{category.name}</option>
                        })}
                    </select>
                </div>


                <div>
                    <textarea id="body" name="body" rows="7"  className='w-full block border-2 border-solid border-black rounded-lg focus:outline-amber-500 placeholder:font-bold ' placeholder='Details about blog....' required onChange={(e) => inputHandler(e)} value={formData.body} />
                </div>

                <div>
                    <label htmlFor='image' className='block mt-6 '> <span className='text-lg tmd:text-2xl font-bold'>Image</span> (You can choose multiple file) </label>
                    <input type="file" multiple id='image' required className='w-full text-lg tmd:text-2xl'  onChange={(e) => imageHandler(e)} ref={ref}/>
                </div>

                <button type='submit' className='bg-amber-400 my-5 text-white py-2 px-4 text-lg font-bold'> POST BLOG</button>
            </form>
        </>
    )
}

export default CreateBlogs;