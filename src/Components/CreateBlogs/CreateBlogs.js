import React from 'react';
import CreateImage from '../../assets/kudan1.jpg';
import Container from '../SharedComponent/Container';

const CreateBlogs = () => {
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
        { id: "12", navName: "Botanical & Zoology" }
    ]

    return (
        <>
       <Container title="Create a new blog" image={CreateImage}/>
        <form className='px-32'>
            <h1 className='text-3xl font-extrabold py-5'>BLOG POST</h1>
            <div className='border-b-2 border-grey-500 mb-7'></div>

            <div>
                <label htmlFor='title ' className='text-2xl font-bold'>Title *</label>
                <input type="text" id="title" className='w-full  outline py-1 text-xl' required />
            </div>

            <div className='my-9'>
                <select name="category" id="category" className='w-full py-1 text-2xl font-bold outline' required>

                    <option value="category">CHOOSE YOUR CATEGORY </option>
                    {navs.map(category => {
                        return <option value={category.navName} key={category.id}>{category.navName}</option>
                    })}
                </select>
            </div>


                 <div>  
                <textarea id="comment" name="comment" rows="7" cols="100" className='outline placeholder:font-bold ' placeholder='Details about blog....' required/>
                </div>
                
                <div>
                    <label htmlFor='image' className='block text-2xl font-bold'>Image</label>
                    <input type="file" id='image' required className='text-2xl' />
                </div>

                <button type='submit' className='bg-amber-400 my-5 text-white py-2 px-4 text-lg font-bold'> POST BLOG</button>
        </form>
        </>
    )
}

export default CreateBlogs;