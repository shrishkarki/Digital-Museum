import React, { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SlideImg1 from '../../../assets/pic1.jpg';



import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SliderContainer() {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    dots:true,
    slidesToShow:1,
    infinite: false,
    speed:300,
    slidesToScroll: 1,
    fade: true,
  }
  return (
    <div className='content relative w-1/2  bg-gradient-to-r from-amber-500 
    to-slate-800'>
    <div className='controls'>
      <button onClick={sliderRef?.slickPrev} className="  absolute top-[45%] z-10 border-2 rounded-full p-[2px] md:p-1 hover:">
        <FaChevronLeft />
      </button>
   <button onClick={sliderRef?.slickNext} className=" absolute top-[45%] z-10 right-0 border-2 rounded-full p-[2px] md:p-1 ">
        <FaChevronRight />
      </button>
       
    </div>
    <Slider ref={setSliderRef} {...sliderSettings} className="bg-gradient-to-r from-amber-500 
    to-slate-800" >
      

      
    {/* {imageList && imageList.map((list,index)=>{
        return <div key={index} className='text-center h-96'>
          <img src={list.image_url} alt="images" className='w-full h-full'/>
          </div>
      })} */}

      <img src={SlideImg1} alt="museum" className='h-[85vh] mix-blend-overlay'/>
      <img src={SlideImg1} alt="museum" className='h-[85vh]'/>
      </Slider>
  </div>
  )
}