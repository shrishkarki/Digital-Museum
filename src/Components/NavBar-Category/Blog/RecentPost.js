import React from 'react';
import { usePosts } from '../../FetchDatas/DummyJson';
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const RecentPost = () => {
    const {results} = usePosts();
    const requiredData = results && results.slice(0, 5);
    const navigate = useNavigate();


    return (
        <>
            <h3 className='font-extrabold mt-6 mb-2'>RECENT POSTS</h3>
            <div className='border-[1px] border-amber-400 w-full'></div>
            { requiredData && requiredData.map(data => {


                    return (
                        <ul className='list-disc list-outside ml-4'>
                            <li key={data.id} className="font-semibold text-[16px] mb-[5px] text-gray-500 cursor-pointer text-inside" onClick={() => navigate(`/blog/${data.subcategory}/${data.id}`)}>{data.title}</li></ul>
                    )
                })
            }

            <h3 className='font-extrabold mt-6 mb-2'>LATEST BLOGS</h3>
            <div className='border-[1px] border-amber-400 w-full mb-3'></div>
            {
                requiredData && requiredData.map(data => {
                    let date = 23;
                    let month = "OCT";
                    let year = "2016";
                    const singleImage=[...data.images.slice(0,1)]
                    return (
                        <div className='flex cursor-pointer' onClick={() => navigate(`/blog/${data.category}/${data.id}`)}>
                            {singleImage.map(eachImage=>(<img src={eachImage.image_url} alt={data.category} className='w-[130px] h-[100px] mb-6' />))}
                            <div className='pl-1'>
                                <p className='text-[15px] break-all hover:underline-offset-2'>{data.title}</p>
                                <div className='flex text-xs mt-2'>
                                    <AiOutlineClockCircle fontSize={15} /> &nbsp;<span>{date}</span>
                                    &nbsp;<span>{month}</span>  &nbsp;<span>{year}</span>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default RecentPost;