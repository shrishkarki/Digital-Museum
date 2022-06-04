import  { useEffect, useState } from 'react';
import axios from 'axios';


export const usePosts = () => {
    const [posts,setPosts]=useState("");
   
    const dummyApi=axios.create({
     
      baseURL:"https://digitalmuseum.herokuapp.com/blogs/"
     
    })

    useEffect(()=>{
         const getData= async()=>{
         
            const res= await dummyApi.get();
            setPosts({...res.data});
        }
        getData();
       
    },[])
    return posts;
    
} 


export const useDemo = () => {
  const [post,setPost]=useState([]);
 
  const demoApi=axios.create({
   
     baseURL:"http://localhost:3006/posts"
  })

  useEffect(()=>{
       const getData= async()=>{
        console.log("second usePost ");
          const res= await demoApi.get();

          setPost(res.data);
      }
      getData();
     
  },[])
  return post;
} 

