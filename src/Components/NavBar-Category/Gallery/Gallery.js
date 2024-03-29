import React from 'react'

import GalleryImage from '../../../assets/kudan1.jpg';
// import Category from '../../SharedComponent/Category';
import Container from '../../SharedComponent/Container';

import { Outlet} from 'react-router-dom';

import SlideCategory from '../../SharedComponent/SlideCategory';

// import FilterCatergory from './FilterCatergory';

const Gallery = () => {
  return (
    <>
    <Container image={GalleryImage} title="Gallery"/>

    {/* <div className=''>
    <Category path="gallery" />
    </div> */}
   
    <SlideCategory path="gallery"/>
     <Outlet/>
       
    </>
   
  )
}

export default Gallery;