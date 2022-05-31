import React,{useState} from 'react';
import { usePosts } from '../../FetchDatas/DummyJson';
import { useNavigate ,Outlet} from 'react-router-dom';
import {AiOutlineClockCircle} from "react-icons/ai";
import RecentPost from './RecentPost';




const FilterBlogPost = ({type}) => {
  const [inputText,setInputText]=useState("");

    const datas=usePosts();
    const navigate=useNavigate();

    const searchHandler=(e)=>{
      setInputText(e.target.value.toLowerCase());
    }




   
    const blogFilter=datas.filter(data=>{
     
      if(type==='All'  ){
        return data
      }
      else{
        return data.subCategory===type
      }
      })

      const blogSearchFilter=blogFilter
      .filter(data=>{
          if(inputText === '') {
          return data;
      }
     
      else {
          return data.title.toLowerCase().includes(inputText) || data.author.toLowerCase().includes(inputText)
      }
      
      })


      // const filterDate
        return(
            <div className='flex gap-10 w-full mt-5'>
           
           <div className='flex w-2/3 flex-wrap gap-8 ml-5'>{inputText? blogSearchFilter.map(data=>{
             let date=23;
             let month="OCT";
             let year="2016";


             
                return (
                  <div key={data.id} className='w-[48%]'>
                  <img src={data.image} alt={data.subCategory} className="w-full"/>
                  <div className='flex'>
                      <AiOutlineClockCircle fontSize={23}/> &nbsp;<span>{date}</span>
                      &nbsp;<span>{month}</span>  &nbsp;<span>{year}</span>
                    </div>
                  <h1 className='text-3xl font-extrabold'>{data.title}</h1>
                  <span className='font-bold text-gray-400'>@{data.author}   / </span><span className='font-bold  text-amber-500 '>{data.subCategory}</span>
                  <p>{data.discription}</p>
                  <button className='bg-amber-300 ' onClick={()=>{navigate(`/blog/${data.subCategory}/${data.id}`)}}>Read More</button>
 
             </div>
                )
            }):  blogFilter.map(data=>{
              let date=23;
              let month="OCT";
              let year="2016";
              return (
                  <div key={data.id} className='w-[48%]'>
                       <img src={data.image} alt={data.subCategory} className="w-full"/>
                       <div className='flex'>
                           <AiOutlineClockCircle fontSize={23}/> &nbsp;<span>{date}</span>
                           &nbsp;<span>{month}</span>  &nbsp;<span>{year}</span>
                         </div>
                       <h1 className='text-3xl font-extrabold'>{data.title}</h1>
                       <span className='font-bold text-gray-400'>@{data.author}   / </span><span className='font-bold  text-amber-500 '>{data.subCategory}</span>
                       <p>{data.discription}</p>
                       <button className='bg-amber-300 ' onClick={()=>{navigate(`/blog/${data.subCategory}/${data.id}`)}}>Read More</button>
      
                  </div>
              )
          })}
           </div>

           <div className='flex flex-col w-[23%] '>
             <label htmlFor="search">SEARCH</label>
             <div className='border-[1px] border-amber-400 w-full my-3'></div>
             <input type="text" id='search' placeholder='Search Blog' value={inputText} onChange={searchHandler} className="border-slate-500 outline"/>
             <RecentPost/>
           </div>
           
            
           <Outlet/>

           
            
            </div>
            
        )
     
}

export default FilterBlogPost