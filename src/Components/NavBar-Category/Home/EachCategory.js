import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaAngleRight, FaRegCommentDots } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const EachCategory = ({ items }) => {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    return (
        <>
            <div className='flex  '>
                {items.categories.length > 0 && <span className='bg-red-500 py-1 px-4 rounded-full text-white m-3 text-xl font-semibold'>{items.categoryName}</span>}
            </div>





            <div className=' tm:flex gap-8 tm:gap-3  md:gap-4   mx-2  sm:mx-3 md:mx-6 lg:mx-14'>



                {items.categories.map((item, index) => {
                    let date = 15;
                    let month = "SEP";

                    return (

                        <>



                            <div className={`duration-300 ease-in-out hover:scale-[1.06] border-t-4 border-amber-400 w-full  tm:w-[47.5%] md:w-[32%] lg:w-[32%] xl:w-1/3 ${index === 2 ? 'hidden' : ''} md:block sm:mb-4`}>
                                <img src={item.image} className='w-full sm:h-[180px]  lg:h-[270px] xl:h-[300px] ' alt={item.subCategory} />

                                <div className='flex justify-between'>
                                    <div>
                                        <div className='text-lg font-extrabold'>{item.title}</div>
                                        <div className='font-bold text-gray-400'>{`by ${item.author}`}/ <span className='text-amber-500 '>{item.subCategory}</span></div>
                                    </div>
                                    <div className='bg-amber-400 text-center  text-white px-4'>
                                        <h3 className=' text-lg  md:text-xl font-bold'>{date}</h3>
                                        <h2 className='text-lg md:text-xl font-bold'>{month}</h2>

                                    </div>
                                </div>
                                <p className='text-sm w-[full] sm:leading-[20px] leading-[23px]  overflow-hidden'>{item.discription}</p>

                                <div className='flex text-amber-500 sm:my-1 tm:my-2' onClick={() => navigate(`/blog/${item.subCategory}/${item.id}`)}>
                                    <button className='text-sm '>VIEW MORE</button>
                                    <FaAngleRight size={22} />
                                </div>


                                <div className='flex gap-7 tm:gap-3 md:gap-4 lg:gap-7 md:text-sm  lg:text-lg'>
                                    <div className='flex gap-1 text-gray-400'>
                                        <FaRegCommentDots size={24} />
                                        <span className='cursor-pointer'>3 Comments</span>
                                    </div>
                                    <span onClick={() => setLiked(!liked)} className="flex text-gray-400 ">
                                        {liked ? <AiFillHeart size={24} className="text-red-600 cursor-pointer " /> : <AiOutlineHeart size={24} className="cursor-pointer" />
                                        } 30 Likes
                                    </span>

                                    <div>

                                    </div>
                                </div>



                                <div className='border-b-2 border-amber-500 w-20  hover:w-full'></div>



                            </div>

                        </>






                    )
                })}



            </div>

            {items.categories.length > 0 && <button onClick={() => navigate(`/blog/${items.categoryName}`)}>See More</button>}
        </>

    )
}

export default EachCategory