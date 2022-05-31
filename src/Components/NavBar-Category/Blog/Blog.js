import React from 'react';
import Container from '../../SharedComponent/Container';
import BlogImage from '../../../assets/tilaurakot.jpg'
import Category from '../../SharedComponent/Category';
import { Outlet } from 'react-router-dom';
// import BlogPost from './BlogPost';

const Blog = () => {
  return (
    <>
     <Category path="blog"/>
    <Container image={BlogImage} title="Blog"/>
    {/* <BlogPost/> */}
    <Outlet/>
   
    </>
  )
}

export default Blog