import React from 'react'
import { useTrippleData } from '../../FetchDatas/DummyJson';
import { useNavigate } from 'react-router-dom';

import { FaAngleRight, FaRegCommentDots } from "react-icons/fa";

import moment from 'moment';

const EachCategoryLists = ({ eachCategory }) => {


    const { results } = useTrippleData(eachCategory);
    const navigate = useNavigate();
   
   


    return (
        <>
        {/* {results && console.log(results)} */}
            <div className='flex  '>
                {results && results.length > 0 && <span className='bg-red-500 py-1 px-4 rounded-full text-white m-3 text-xl font-semibold'>{eachCategory}</span>}

            </div>

            <div className=' tm:flex gap-8 tm:gap-3  md:gap-4   mx-2  sm:mx-3 md:mx-6 lg:mx-14'>
                {
                    results && results.map((item, index) => {
                        let check = moment(item.pub_date, 'YYYY/MM/DD');
                        let month = check.format('MMM');
                        let date   = check.format('D');
                      

    
                        const singleImage = [...item.images.slice(0, 1)]
                        return (
                            <>
                                <div className={` duration-300 ease-in-out hover:scale-[1.04] border-t-4 border-amber-400  border-b-2  shadow-lg w-full  tm:w-[47.5%] md:w-[32%] lg:w-[32%] xl:w-1/3 ${index === 2 ? 'hidden' : ''} md:block sm:mb-4`} key={index}>
                                    {singleImage.map(eachImage => (<img src={eachImage.image_url} className='w-full sm:h-[180px]  lg:h-[270px] xl:h-[300px] object-cover' alt={item.category} />))}

                                    <div className='flex  pl-2'>
                                        <div className='w-[80%]'>
                                            <div className='text-lg font-extrabold  truncate'>{item.title}</div>
                                            <div className='font-bold text-gray-400'>{`by ${item.author}`}/ <span className='text-amber-500 '>{item.category}</span></div>
                                        </div>
                                        <div className='bg-amber-400 text-center  text-white px-4 h-14 w-[20%]'>
                                            <h3 className=' text-lg  md:text-xl font-bold'>{date}</h3>
                                            <h2 className='text-lg md:text-xl font-bold'>{month}</h2>

                                        </div>
                                    </div>
                                    <p className='text-sm w-[full] sm:leading-[20px] leading-[23px] truncate pl-2'>{item.body}</p>

                                    <div className='flex pl-2 text-amber-500 sm:my-1 tm:my-2' onClick={() => navigate(`/blog/${item.category}/${item.slug}`)}>
                                        <button className='text-sm '>VIEW MORE</button>
                                        <FaAngleRight size={22} />
                                    </div>


                                    <div className='flex pl-2 gap-7 tm:gap-3 md:gap-4 lg:gap-7 md:text-sm  lg:text-lg'>
                                        <div className='flex gap-1 text-gray-400 pb-3'>
                                            <FaRegCommentDots size={24} />
                                            <span className='cursor-pointer'>{item.comment_count} Comments</span>
                                        </div>
                                       

                                        <div>

                                        </div>
                                    </div>






                                </div >

                            </>
                        )
                    })
                }
            </div>
        </>
    )




}

export default EachCategoryLists