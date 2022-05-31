import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../../FetchDatas/DummyJson';
import Container from '../../SharedComponent/Container';
import EachImage from '../../../assets/Tilaurakot1.jpg';
import { AiOutlineClockCircle } from "react-icons/ai";
import RecentPost from './RecentPost';
import { FaRegCommentDots } from "react-icons/fa";




const EachBlogPost = () => {
  const { id } = useParams();
  const datas = usePosts();

  const filterEachBlog = datas.filter(data => {
    return data.id === id
  })


  return (
    <>
      {filterEachBlog.map(data => {

        let date = 23;
        let month = "OCT";
        let year = "2016";
        return (
          // shadow not working
          <div className='shadow-2xl shadow-black'> 

            <Container image={EachImage} title={data.title} />
            <div className='flex gap-20 ml-5 mt-3'>
              <article key={data.id} className='w-[60%]'>

                <img src={data.image} alt={data.subCategory} className="w-full" />
                <div className='flex'>
                  <AiOutlineClockCircle fontSize={23} /> &nbsp;<span>{date}</span>
                  &nbsp;<span>{month}</span>  &nbsp;<span>{year}</span>
                </div>
                <h1 className='text-3xl font-extrabold'>{data.title}</h1>
                <span className='font-bold text-gray-400'>@{data.author}   / </span><span className='font-bold  text-amber-500 '>{data.subCategory}</span>
                <p>{data.discription}</p>

                <p>Share:</p>

                <div className='flex gap-1 text-gray-500 mt-5 mb-3' >
                  <FaRegCommentDots size={20} className="mt-1" />
                  <p className='font-extrabold text-lg '>{data.comment.length} Comments:</p>
                </div>
                {data.comment.map(eachCom => {
                  return (<div key={eachCom.id} className="flex mb-4">
                    <figure className='w-[40px] h-[40px] border-2 rounded-full border-red-400'>hello</figure>
                    <div className='ml-3 pt-1'>
                      <p className='font-extrabold'>{eachCom.commentBy}</p>
                      <p>{eachCom.title}</p>
                    </div>
                  </div>)
                })}

                <form className='flex flex-col w-[60%]'>
                  <label htmlFor='comment' className='uppercase font-extrabold text-amber-400 text-xl leading-10'>Leave a comment:</label>
                  <textarea id="comment" name="comment" rows="4" className='outline outline-amber-400' />

                  <button type='submit' className='bg-amber-400 my-5 text-white py-2 text-lg'> POST COMMENT </button>

                </form>
              </article>
              <div className='w-[28%]'>
                <RecentPost />
              </div>

            </div>

          </div>
        )
      })}


    </>


  )
}

export default EachBlogPost;