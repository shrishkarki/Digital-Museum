import  { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { IndexContext } from '../ContextAPi/IndexContext';


export const usePosts = () => {
    const [posts,setPosts]=useState("");
    const {setLoading}=useContext(IndexContext);
   
    const dummyApi=axios.create({
     
      baseURL:"https://api.yatharup.com/blogs/"
     
    })

    useEffect(()=>{
         const getData= async()=>{
         
            const res= await dummyApi.get();
            setLoading(false);
            setPosts({...res.data});
        }
        getData();
       
    },[])
    return posts;
    
} 





export const useCategory = () => {
  const [categories,setCategories]=useState([]);
  const {setLoading}=useContext(IndexContext);
 
  const categoryApi=axios.create({
   
     baseURL:"https://api.yatharup.com/blogs/categories"
  })

  useEffect(()=>{
       const getData= async()=>{
       
          const res= await categoryApi.get();
      
          setCategories(res.data);
         
          
      }
      getData();
     
  },[])
  return categories;
 
} 



export const useTrippleData=(categoryParam)=>{
  const [trippleData,setTrippleData]=useState("");
  const {setLoading}=useContext(IndexContext);

  const trippleDataApi=axios.create({
   
    baseURL:`https://api.yatharup.com/blogs?limit=3&category=${categoryParam}`
 })
   
 useEffect(()=>{
   const getData=async()=>{
    const res= await trippleDataApi.get();

    setLoading(false);

    setTrippleData(res.data);
   }
   getData();
 },[])
 return trippleData;
}


export const useRecentPosts=()=>{
  const [recentPosts , setRecentPosts]=useState("");
  const {setLoading}=useContext(IndexContext);
   const recentPostApi=axios.create({
    baseURL:"https://api.yatharup.com/blogs?limit=5"
   })

   useEffect(()=>{
    const getData=async()=>{
      const res= await recentPostApi.get();
      setLoading(false)
      setRecentPosts(res.data);
    }
    getData();
   },[])
   return recentPosts;
}



export const useUserPosts=(username)=>{
  const [userPosts, setUserPosts]=useState("");
  const {setLoading}=useContext(IndexContext);
  const userPostApi=axios.create({
    baseURL:`https://api.yatharup.com/blogs?username=${username}`
  })
  useEffect(()=>{
    const getData=async()=>{
      const res= await userPostApi.get();
      setLoading(false)
      setUserPosts(res.data);

    }
    getData();
   },[])
   return userPosts;
}

export const useUserAbout=(username)=>{
  const [userDetail,setUserDetail]=useState("");
  const {setLoading}=useContext(IndexContext);

 
  const eachUserPostApi = axios.create({
    baseURL: `https://api.yatharup.com/accounts/${username}/`
  })

  useEffect(() => {
   
    const getData = async () => {
      const res = await eachUserPostApi.get();
      setLoading(false)
      setUserDetail({ ...res.data })
    }
    getData();
  }, []);
  return userDetail;
}





