import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function MultipleImageSlider({imageList}) {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    dots:true,
    slidesToShow:1,
    infinite: false,
    speed:300,
    slidesToScroll: 1,
  }
  return (
    <div className='content relative'>
    <div className='controls'>
     {imageList.length>1 && <button onClick={sliderRef?.slickPrev} className="  absolute top-[45%] z-10 border-2 rounded-full p-[2px] md:p-1 hover:">
        <FaChevronLeft />
      </button>}
      {imageList.length>1 && <button onClick={sliderRef?.slickNext} className=" absolute top-[45%] z-10 right-0 border-2 rounded-full p-[2px] md:p-1 ">
        <FaChevronRight />
      </button>
       }
    </div>
    <Slider ref={setSliderRef} {...sliderSettings}  >
      

      
    {imageList && imageList.map((list,index)=>{
        return <div key={index} className='text-center '>
          <img src={list.image_url} alt="images" className='w-full h-[280px] tmd:h-[250px] lg:h-96 '/>
          </div>
      })}
      </Slider>
  </div>
  )
}