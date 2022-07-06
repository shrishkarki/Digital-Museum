import React from 'react';
import { useRecentPosts } from '../../FetchDatas/DummyJson';
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const RecentPost = () => {
    const {results} = useRecentPosts();
    // const results = results && results.slice(0, 5);
    const navigate = useNavigate();


    return (
        <div className='flex flex-col'>
            <h3 className='font-extrabold md:mt-3 lg:mt-6 mb-2'>RECENT POSTS</h3>
            <div className='border-[1px] border-amber-400 w-full mb-2'></div>
            { results && results.map(data => {


                    return (
                        <ul className='list-disc list-outside ml-4'>
                            <li key={data.id} className="font-semibold text-[14px] tmd:text-[16px] mb-[5px] text-gray-500 cursor-pointer text-inside break-all uppercase tracking-[1px] leading-[22px]" onClick={() => navigate(`/blog/${data.category}/${data.slug}`)}> {data.title}</li></ul>
                    )
                })
            }

            <h3 className='font-extrabold mt-6 mb-2'>LATEST BLOGS</h3>
            <div className='border-[1px] border-amber-400 w-full mb-3'></div>
            {
                results && results.map(data => {
                    let date = 23;
                    let month = "OCT";
                    let year = "2016";
                    const singleImage=[...data.images.slice(0,1)]
                    return (
                        <div className='flex cursor-pointer' onClick={() => navigate(`/blog/${data.category}/${data.slug}`)}>
                        {/* <div className='flex cursor-pointer' > */}
                            {singleImage.map(eachImage=>(<img src={eachImage.image_url} alt={data.category} className='w-[130px] h-[100px] mb-6 object-cover' />))}
                            
                            <div className='pl-1'>
                                <p className='text-[14px] tmd:text-[16px] break-all font-black  hover:underline uppercase tracking-[1px]'>{data.title}</p>
                                <div className='flex text-xs mt-2'>
                                    <AiOutlineClockCircle fontSize={15} /> &nbsp;<span>{date}</span>
                                    &nbsp;<span>{month}</span>  &nbsp;<span>{year}</span>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecentPost;