import React from 'react'
import { useUserPosts } from '../FetchDatas/DummyJson'
import { useParams } from 'react-router-dom';
import BlogCategory from '../SharedComponent/BlogCategory';

const UserPosts = () => {
  const {username}=useParams();
  const {results}=useUserPosts(username);
  
  return (
    <div className=' tm:flex tm:flex-wrap gap-8 tm:gap-3  md:gap-4   mx-2  sm:mx-3 md:mx-6 lg:mx-14 mt-7'>
    
    {results?.length?(results.map((eachPost, index)=>{
      return <BlogCategory data={eachPost} index={index}/>
    })):<p className='text-2xl font-bold text-center w-full mb-7'>No Content to display</p>}
    </div>
    
  )
}

export default UserPosts