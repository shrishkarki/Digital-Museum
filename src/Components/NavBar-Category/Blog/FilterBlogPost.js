import React,{useState} from 'react';
import { usePosts } from '../../FetchDatas/DummyJson';
import { useNavigate ,Outlet} from 'react-router-dom';
import {AiOutlineClockCircle} from "react-icons/ai";
import RecentPost from './RecentPost';
import moment from 'moment';
import { FaAngleRight, FaRegCommentDots } from "react-icons/fa";




const FilterBlogPost = ({type}) => {
  const [inputText,setInputText]=useState("");

    const datas=usePosts();
    const navigate=useNavigate();

    const searchHandler=(e)=>{
      setInputText(e.target.value.toLowerCase());
    }
console.log(datas)



   
    const blogFilter=datas.results &&  datas.results.filter(data=>{
     
      if(type==='All'  ){
        return data
      }
      else{
        return data.category===type
      }
      })

      console.log(blogFilter,"blogFilter");

      const blogSearchFilter= blogFilter && blogFilter
      .filter(data=>{
          if(inputText === '') {
          return data;
      }
     
      else {
          return data.title.toLowerCase().includes(inputText) || data.author.toLowerCase().includes(inputText)
      }
      
      })


    
        return(
         
            <div className='flex flex-col lg:flex-row gap-6 xl:gap-10 w-full mt-5 '>
            {datas && console.log(datas)}
           <div className='flex w-full lg:w-2/3 flex-wrap pl-4 tm:pl-0 tm:mx-3 lg:mx-0  gap-2 xl:gap-8 lg:ml-5'>{inputText? blogSearchFilter.map(data=>{
              let check=moment(data.pub_date,'YYYY/MM/DD');
              let date=check.format('DDD');
              let month=check.format("MMMM");
              let year=check.format("YYYY");

              const singleImage = [...data.images.slice(0, 1)]
             
                return (
                  <div key={data.id} className='w-[48%] duration-300 ease-in-out hover:scale-[1.04] border-t-4 border-amber-400  border-b-2  shadow-lg mb-3 h-[300px]' >
                  {/* <img src={data.image} alt={data.category} className="w-full"/> */}
                  {singleImage.map(eachImage => (<img src={eachImage.image_url} alt={data.category} className="w-full h-[250px]"/>))}
                  <div className='flex pl-3'>
                      <AiOutlineClockCircle fontSize={23}/> &nbsp;<span>{date}</span>
                      &nbsp;<span>{month}</span>  &nbsp;<span>{year}</span>
                    </div>
                  <h1 className='text-3xl font-extrabold truncate pl-3'>{data.title}</h1>
                  <span className='font-bold text-gray-400 pl-3'>@{data.author}   / </span><span className='font-bold  text-amber-500 '>{data.category}</span>
                  <p className='truncate pl-3'>{data.body}</p>


                  <div className='flex text-amber-500 sm:my-1 tm:my-2 pl-3' onClick={() => navigate(`/blog/${data.category}/${data.slug}`)}>
                                   <button className='text-sm '>READ MORE</button>
                                   <FaAngleRight size={22} />
                               </div>

                               <div className='flex gap-1 text-gray-400 pl-3 pb-3'>
                                       <FaRegCommentDots size={24} />
                                       <span className='cursor-pointer'>{data.comment_count} Comments</span>
                                   </div>
 
             </div>
                )
            }): blogFilter && blogFilter.map(data=>{
              let check=moment(data.pub_date,'YYYY/MM/DD');
              let date=check.format('D');
              let month=check.format("MMMM");
              let year=check.format("YYYY");
              const singleImage = [...data.images.slice(0, 1)]
              return (
                  <div key={data.id} className='w-[94%] tm:w-[48%] duration-300 ease-in-out hover:scale-[1.04] border-t-4 border-amber-400  border-b-2  shadow-lg mb-3 h-[330px] tm:h-[360px] tmd:h-[430px]' >
                       {/* <img src={data.image} alt={data.category} className="w-full"/> */}
                       {singleImage.map(eachImage => (<img src={eachImage.image_url} alt={data.category} className="w-full h-[165px] tm:h-[180px] tmd:h-[230px] md:h-[250px] object-cover"/>))}
                       <div className='flex pl-3'>
                           <AiOutlineClockCircle fontSize={23}/> &nbsp;<span>{date}</span>
                           &nbsp;<span>{month}</span>  &nbsp;<span>{year}</span>
                         </div>
                       <h1 className='text-xl md:text-2xl xl:text-3xl font-extrabold truncate pl-3 capitalize'>{data.title}</h1>
                       <span className='font-bold text-gray-400 pl-3'>@{data.author}   / </span><span className='font-bold  text-amber-500 '>{data.category}</span>
                       <p className='truncate pl-3'>{data.body}</p>


                       <div className='flex text-amber-500 sm:my-1 tm:my-2 pl-3' onClick={() => navigate(`/blog/${data.category}/${data.slug}`)}>
                                        <button className='text-sm '>READ MORE</button>
                                        <FaAngleRight size={22} />
                                    </div>

                                    <div className='flex gap-1 text-gray-400 pl-3 pb-3'>
                                            <FaRegCommentDots size={24} />
                                            <span className='cursor-pointer'>{data.comment_count} Comments</span>
                                        </div>
      
                  </div>
              )
          })}
           </div>

           <div className=' flex flex-col w-[100%]  tm:w-[65%] tmd:w-[60%]  lg:w-[23%] px-5 lg:px-0 '>
            <div className='hidden lg:flex lg:flex-col'>
            <label htmlFor="search" className='font-extrabold'>SEARCH</label>
             <div className='border-[1px] border-amber-400 w-full my-3'></div>
             <input type="text" id='search' placeholder='Search Blog' value={inputText} onChange={searchHandler} className="border-slate-500 outline"/>
            </div>
            
            <RecentPost/>

            
           </div>
           
            
           <Outlet/>

           
            
            </div>
            
        )
     
}

export default FilterBlogPost