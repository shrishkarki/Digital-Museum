// import React, { useState } from 'react'
// import Slider from 'react-slick'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// export default function SlideCategory({path}) {
//   const [sliderRef, setSliderRef] = useState(null)

//   const sliderSettings = {
//     arrows: false,
//     dots:false,
   
//     // slidesToScroll: 3,
//     slidesToShow:10,
//     infinite: false,
//     speed:300,
   
//     slidesToScroll: 7,
   
//     responsive: [
//       {
//         // max-width
//         breakpoint: 920,
//         settings: {
//          slidesToShow: 6,
//          slidesToScroll: 5,
        
//         }
//       },
//       {
//         // max-width
//         breakpoint: 920,
//         settings: {
//          slidesToShow: 6,
//          slidesToScroll: 5,
        
//         }
//       },
//       {
//         breakpoint: 625,
//         settings: {
//          slidesToShow: 4,
//          slidesToScroll: 3,
        
//         }
//       },
//       {
//         breakpoint: 435,
//         settings: {
//          slidesToShow: 3,
//          slidesToScroll: 2,
        
//         }
//       },
      
//     ]
   
//       // {
//       //   breakpoint: 1360,
//       //   settings: {
//       //    slidesToShow: 12,
//       //   }
//       // }
     
    
//   }

//   const navs=[
//     {id:"1",navName:"All"},
//     {id:"2",navName:"Personal"},
    
//     {id:"3",navName:"Biography"},
//     {id:"4",navName:"Nature"},
//     {id:"5",navName:"Archelogy"},
//     {id:"6",navName:"History"},
//     {id:"7",navName:"Science"},
//     {id:"8",navName:"Art & craft"},
//     {id:"9",navName:"Aviation"},
//     {id:"10",navName:"Agriculture"},
//     {id:"11",navName:"Eco-Museum"},
//     {id:"12",navName:"Botanical"},
//     {id:"12",navName:"Zoology"}
//   ]

//   return (
//     <div className='content relative'>
//     <div className='controls'>
//       <button onClick={sliderRef?.slickPrev} className="  absolute top-[26%] z-10 border-2 rounded-full p-[2px] md:p-1">
//         <FaChevronLeft />
//       </button>
//       <button onClick={sliderRef?.slickNext} className=" absolute top-[26%] z-10 right-0 border-2 rounded-full p-[2px] md:p-1 ">
//         <FaChevronRight />
//       </button>
//     </div>
//     <Slider ref={setSliderRef} {...sliderSettings} className="px-6 xxl:px-10 bg-gradient-to-r from-amber-500 
//                      to-slate-600" >
      

      
//     {navs.map(list=>{
//         return <div key={list.id} className='text-center hover:bg-[#f5b453] '>
//           <p className=' text-white py-3 '><Link to={`/${path}/${list.navName}`}>{list.navName}</Link></p>
//           </div>
//       })}
//       </Slider>
//   </div>
//   )
// }


import React from 'react'

const SlideCategory = () => {
  return (
    <div>SlideCategory</div>
  )
}

export default SlideCategory