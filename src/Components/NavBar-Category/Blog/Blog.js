import React from 'react';
import Container from '../../SharedComponent/Container';
import BlogImage from '../../../assets/tilaurakot.jpg'
// import Category from '../../SharedComponent/Category';
import { Outlet } from 'react-router-dom';
import SlideCategory from '../../SharedComponent/SlideCategory';
// import BlogPost from './BlogPost';

const Blog = () => {
  return (
    <>
     <SlideCategory path="blog"/>
    <Container image={BlogImage} title="Blog"/>
    {/* <BlogPost/> */}
    <Outlet/>
   
    </>
  )
}

export default Blog