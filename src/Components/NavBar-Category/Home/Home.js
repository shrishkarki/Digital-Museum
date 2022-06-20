import React from 'react'
// import Slider from './Slider';
import LatestBlog from './LatestBlog';
// import SliderContainer from './SliderContainer';
import Header from './Section';

const Home = () => {

  return (
    <>
      {/* <div className='w-full flex'>
        <div className='w-1/2 h-[100vh]'>

        </div> */}
        {/* <Slider/> */}
        
<Header/>
      {/* </div> */}
      <LatestBlog />
    </>


  )
}

export default Home