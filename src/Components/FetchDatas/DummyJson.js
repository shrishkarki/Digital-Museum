import  { useEffect, useState } from 'react';
import axios from 'axios';


export const usePosts = () => {
    const [posts,setPosts]=useState("");
   
    const dummyApi=axios.create({
     
      baseURL:"https://api.yatharup.com/blogs/"
     
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





export const useCategory = () => {
  const [categories,setCategories]=useState([]);
 
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

  const trippleDataApi=axios.create({
   
    baseURL:`https://api.yatharup.com/blogs?limit=3&category=${categoryParam}`
 })
   
 useEffect(()=>{
   const getData=async()=>{
    const res= await trippleDataApi.get();

    setTrippleData(res.data);
   }
   getData();
 },[])
 return trippleData;
}


// export const useEachBlogPost=(slugData)=>{

//   const [eachBlogPost,setEachBlogPost]=useState('');


//   const eachPostApi=axios.create({
//     baseURL:`https://digitalmuseum.herokuapp.com/blogs/b/${slugData}/`
//   })

//   useEffect(()=>{
    
//     const getData=async()=>{
//       console.log("inside async await function")
//       const res=await eachPostApi.get();
//       setEachBlogPost(res)

//     }
//     getData();
//   },[])
// return eachBlogPost;
// }

