import React from 'react';

import { useNavigate } from 'react-router-dom';
import {AiOutlineClockCircle} from "react-icons/ai";

import moment from 'moment';
import { FaAngleRight, FaRegCommentDots } from "react-icons/fa";


const BlogCategory = ({data, index}) => {

  console.log(data)
  const {pub_date}=data;

    const navigate=useNavigate();

    
if(data){
  let check=moment(pub_date,'YYYY/MM/DD');
  var date=check.format('D');
  var month=check.format("MMMM");
  var year=check.format("YYYY");

}
const singleImage = [...data.images.slice(0, 1)]
    
  return (
    <div className={` duration-300 ease-in-out hover:scale-[1.04] border-t-4 border-amber-400  border-b-2  shadow-lg w-full  tm:w-[47.5%] md:w-[30%] lg:w-[32%]  ${index === 2 ? 'hidden' : ''} md:block sm:mb-4`} key={index}>
    {singleImage.map(eachImage => (<img src={eachImage.image_url} className='w-full sm:h-[180px]  lg:h-[270px] xl:h-[300px] object-cover' alt={data.category} />))}

    <div className='flex  pl-2'>
        <div className='w-[80%]'>
            <div className='text-lg font-extrabold  truncate'>{data.title}</div>
            <div className='font-bold text-gray-400'>{`by ${data.author}`}/ <span className='text-amber-500 '>{data.category}</span></div>
        </div>
        <div className='bg-amber-400 text-center  text-white px-4 h-14 w-[20%]'>
            <h3 className=' text-lg  md:text-xl font-bold'>{date}</h3>
            <h2 className='text-lg md:text-xl font-bold'>{month}</h2>

        </div>
    </div>
    <p className='text-sm w-[full] sm:leading-[20px] leading-[23px] truncate pl-2'>{data.body}</p>

    <div className='flex pl-2 text-amber-500 sm:my-1 tm:my-2' onClick={() => navigate(`/blog/${data.category}/${data.slug}`)}>
        <button className='text-sm '>VIEW MORE</button>
        <FaAngleRight size={22} />
    </div>


    <div className='flex pl-2 gap-7 tm:gap-3 md:gap-4 lg:gap-7 md:text-sm  lg:text-lg'>
        <div className='flex gap-1 text-gray-400 pb-3'>
            <FaRegCommentDots size={24} />
            <span className='cursor-pointer'>{data.comment_count} Comments</span>
        </div>
       

        <div>

        </div>
    </div>






</div >
  )
}

export default BlogCategory