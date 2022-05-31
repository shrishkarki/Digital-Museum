import  { useEffect, useState } from 'react';
import axios from 'axios';


export const usePosts = () => {
    const [posts,setPosts]=useState([]);
    console.log("first usePost ");
    const dummyApi=axios.create({
      baseURL:"http://localhost:3006/posts"
    })

    useEffect(()=>{
         const getData= async()=>{
            const res= await dummyApi.get();
            setPosts(res.data);
        }
        getData();
       
    },[])
    return posts;
} 
export const useDemo = () => {
  const [post,setPost]=useState([]);
  console.log("second usePost ");
  const demoApi=axios.create({
    baseURL:"http://127.0.0.1:8000/blogs?limit=1&category=Travel"
  })

  useEffect(()=>{
       const getData= async()=>{
          const res= await demoApi.get();
          setPost(res.data);
      }
      getData();
     
  },[])
  return post;
} 

