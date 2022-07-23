import React,{lazy, Suspense} from 'react';
// import Container from '../../SharedComponent/Container';
import BlogImage from '../../../assets/tilaurakot.jpg'
// import Category from '../../SharedComponent/Category';
import { Outlet } from 'react-router-dom';
// import SlideCategory from '../../SharedComponent/SlideCategory';
// import BlogPost from './BlogPost';

const SlideCategory=lazy(()=>import('../../SharedComponent/SlideCategory'));
const Container=lazy(()=>import('../../SharedComponent/Container'))

const Blog = () => {
  return (
    <>
    <Suspense fallback={<div className='text-8xl font-bold'>Loading ........</div>}>
     <SlideCategory path="blog"/>
    <Container image={BlogImage} title="Blog"/>
    </Suspense>
    {/* <BlogPost/> */}
    <Outlet/>
   
    </>
  )
}

export default Blog