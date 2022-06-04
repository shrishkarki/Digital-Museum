import React, { useState } from 'react';
import CreateImage from '../../assets/kudan1.jpg';
import Container from '../SharedComponent/Container';
import axios from 'axios';


const CreateBlogs = () => {
    const URL = "https://digitalmuseum.herokuapp.com/blogs/";
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        body: "",
    })
    const [images, setImages] = useState("");
    const navs = [

        { id: "2", navName: "Personal" },
        { id: "3", navName: "Eco-Museum" },
        { id: "4", navName: "History" },
        { id: "5", navName: "Nature" },
        { id: "6", navName: "Archelogy" },
        { id: "7", navName: "Science" },
        { id: "8", navName: "Art & craft" },
        { id: "9", navName: "Aviation" },
        { id: "10", navName: "Agriculture" },
        { id: "11", navName: "Biography" },
        { id: "12", navName: "Botanical" },
        { id: "13", navName: "Zoology" }
    ]

    const inputHandler = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.id] = e.target.value;
        setFormData(newFormData);
    }

    const imageHandler = (e) => {
        setImages(e.target.files)
    }
console.log(images);



    const submitHandler = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append('title', formData.title)
        fd.append('category', formData.category)
        fd.append('body', formData.body)

        for (var x = 0; x < images.length; x++) {
            fd.append('images', images[x])
        }
        axios({
            url: URL,
            method: 'POST',
            headers: {
                authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1NTQ5NzExLCJpYXQiOjE2NTQwMTM3MTEsImp0aSI6ImYwZjk3MjQ1N2I4MDQ0Njg5ZTlkM2Q0ZDQ4MjEzZWE2IiwidXNlcl9pZCI6MX0.XiHcrtaS0eFXkNV7OLaVAZrpDyX7ey4ikxYnfN_4x0g"
            },
            data: fd
        }).then(res => {
            console.log(res.data)
        })

        setFormData({
            title: "",
            category: "",
            body: "",
        })
        setImages("")

    }




    return (
        <>
            <Container title="Create a new blog" image={CreateImage} />
            <form className='px-32' onSubmit={submitHandler}>
                <h1 className='text-3xl font-extrabold py-5'>BLOG POST</h1>
                <div className='border-b-2 border-grey-500 mb-7'></div>

                <div>
                    <label htmlFor='title ' className='text-2xl font-bold'>Title *</label>
                    <input type="text" id="title" className='w-full  outline py-1 text-xl' value={formData.title} required onChange={(e) => inputHandler(e)} />
                </div>

                <div className='my-9'>
                    <select name="category" id="category" className='w-full py-1 text-2xl font-bold outline' required onChange={(e) => inputHandler(e)} value={formData.category}>

                        <option value="category">CHOOSE YOUR CATEGORY </option>
                        {navs.map(category => {
                            return <option value={category.navName} key={category.id}>{category.navName}</option>
                        })}
                    </select>
                </div>


                <div>
                    <textarea id="body" name="body" rows="7" cols="100" className='outline placeholder:font-bold ' placeholder='Details about blog....' required onChange={(e) => inputHandler(e)} value={formData.body} />
                </div>

                <div>
                    <label htmlFor='image' className='block text-2xl font-bold'>Image</label>
                    <input type="file" multiple id='image' required className='text-2xl'  onChange={(e) => imageHandler(e)} />
                </div>

                <button type='submit' className='bg-amber-400 my-5 text-white py-2 px-4 text-lg font-bold'> POST BLOG</button>
            </form>
        </>
    )
}

export default CreateBlogs;