import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useEachBlogPost } from '../../FetchDatas/DummyJson';
import Container from '../../SharedComponent/Container';
import EachImage from '../../../assets/Tilaurakot1.jpg';
import { AiOutlineClockCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import MultipleImageSlider from './MultipleImageSlider';
import RecentPost from './RecentPost';
import { FaRegCommentDots } from "react-icons/fa";
import axios from 'axios';
import authHeader from '../../SharedComponent/AuthHeader';
// import { useNavigate } from 'react-router-dom';
import ModalLoginPopup from '../../SharedComponent/ModalLoginPopup';
import moment from 'moment';
import { FacebookShareButton } from 'react-share';
import {FacebookIcon} from 'react-share';
import { Helmet } from 'react-helmet';





const EachBlogPost = () => {
  const [datas, setDatas] = useState('');
  const [comment, setComment] = useState("");
  const { slug } = useParams();
//  const navigate=useNavigate();
  const [likePost, setLikePost] = useState("");
  const [showModal,setShowModal]=useState(false);
  // const [title, setTitle]=useState("Homepage");


  // gettting each details
  const eachPostApi = axios.create({
    baseURL: `https://api.yatharup.com/blogs/b/${slug}/`
  })
  useEffect(() => {
   
    const getData = async () => {
      const res = await eachPostApi.get();
      setDatas({ ...res })
    }
    getData();
  }, [likePost,comment,slug]);



  //posting like
  const likeHandler = (slug) => {

    if(!localStorage.getItem("token")){
      // navigate('/Login')
      console.log("showmodal popup")
      setShowModal(true);
      return false;
    }

    const URLs = `https://api.yatharup.com/blogs/b/${slug}/like/`
    axios({
      url: URLs,
      method: 'POST',
      headers:authHeader()
    

      

    }).then(res => {

      console.log(res.data)
      setLikePost(res.data)

    }).catch(err => {
      console.log(err)
    })
  }

  // posting comment

  const URL = `https://api.yatharup.com/blogs/b/${slug}/comment/`;
  const commentSubmitHandler = (e) => {
    e.preventDefault();
    if(!localStorage.getItem("token")){
      setShowModal(true);
      return false;
    }
   
    
    let fd = new FormData();
    fd.append("comment", comment);

    axios({
      url: URL,
      method: 'POST',
      headers:authHeader(),
      data: fd
    }).then(res => {
      console.log(res.data)
    })
    setComment("")
  }


if(datas.data){
  let check=moment(datas.data.pub_date,'YYYY/MM/DD');
  var date=check.format('D');
  var month=check.format("MMMM");
  var year=check.format("YYYY");

}
  
 
  return (
    <>
      {datas.data && <div className='shadow-2xl'>
    
<Helmet>
  <title>{datas.data.title}</title>
  <meta name="description" content={datas.data.body}/>


  <meta property="og:title" content="hello world" />
  <meta property="og:description" content={datas.data.body} />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.demo.yatharup.com/blog/Travel/why-do-we-use-it" />
<meta property="og:image" content="https://im.ge/i/uJfLty" />
  
</Helmet>
        <Container image={EachImage} title={datas.data.title} />
        <div className='flex flex-col tmd:flex-row gap-7 md:gap-10 lg:gap-20 ml-[10px]  mt-3'>
          <article key={datas.data.id} className=' w-[97%] tmd:w-[50%] md:w-[45%]'>


            <MultipleImageSlider imageList={datas.data.images} />


            <div className='flex'>
              <AiOutlineClockCircle fontSize={23} /> &nbsp;<span>{date}</span>
              &nbsp;<span>{month}</span>  &nbsp;<span>{year}</span>
            </div>
            <h1 className='text-3xl font-extrabold'>{datas.data.title}</h1>
            {}
            <span className='font-bold text-gray-400'>@{datas.data.author}   / </span><span className='font-bold  text-amber-500 '>{datas.data.category}</span>

            {/* <button onClick={() => likeHandler(data.slug)}>Like</button> <span>{data.like_count}</span> */}
            <span onClick={() => likeHandler(datas.data.slug)} className="flex text-gray-400 ">
              {likePost.liked || datas.data.like_count ? <AiFillHeart size={24} className="text-red-600 cursor-pointer " /> : <AiOutlineHeart size={24} className="cursor-pointer" />
              } {datas.data.like_count} Likes
            </span>
            <p>{datas.data.body}</p>

            <p>Share:
              {/* <FacebookShareButton url='https://9021-103-181-227-138.in.ngrok.io/blog/Travel/why-do-we-use-it' quote="hello worldddd" hashtag='#donee'> */}
               <FacebookShareButton url='https://www.demo.yatharup.com/blog/Travel/why-do-we-use-it' quote="hello worldddd" hashtag='#donee'>
              
                <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                </FacebookShareButton>
            </p>

            <div className='flex gap-1 text-gray-500 mt-5 mb-3' >
              <FaRegCommentDots size={20} className="mt-1" />
              <p className='font-extrabold text-lg '>{datas.data.comment_count} Comments:</p>
            </div>


            {datas.data.comments && datas.data.comments.map(eachCom => {
              return (<div key={eachCom.id} className="flex mb-4">
                <figure className='w-[40px] h-[40px] border-2 rounded-full border-amber-400'> <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" /></figure>
                <div className='ml-3 pt-1'>
                  <p className='font-extrabold'>{eachCom.commented_by}</p>
                  <p>{eachCom.comment}</p>
                </div>
              </div>)
            })}

            <form className='flex flex-col w-[60%]' onSubmit={commentSubmitHandler}>
              <label htmlFor='comment' className='uppercase font-extrabold text-amber-400 text-xl leading-10'>Leave a comment:</label>
              <textarea id="comment" value={comment} name="comment" rows="4" className='outline outline-amber-400' onChange={(e) => setComment(e.target.value)} />

              <button type='submit' className='bg-amber-400 my-5 text-white py-2 text-lg'> POST COMMENT </button>

            </form>
          </article>
          <div className=' pr-5 lg:pr-0'>
            <RecentPost />
          </div>

         

        </div>

      </div>}



{showModal && <ModalLoginPopup close={setShowModal}/>}
    </>


  )
}

export default EachBlogPost;