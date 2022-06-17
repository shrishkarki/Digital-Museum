import React from 'react';
import pic1 from "../../../assets/pic1.jpg";
import { Link } from 'react-router-dom';


const Slider = () => {

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide relative h-[80vh]" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden  ">

          <div className=" carousel-item active relative float-left w-full  bg-gradient-to-r from-slate-800 via-slate-700 
                     to-amber-600">

            <img
              src={pic1}

              className="block w-full h-[80vh] mix-blend-overlay"
              alt="..."
            />
            <div className="carousel-caption  flex flex-col justify-center items-center absolute text-center h-full">
            <h5 className="text-6xl font-bold uppercase tracking-[9px]">Yahtarup</h5>
              <p className="text-[22px] text-center tracking-[3px] capitalize mt-2">Some representative placeholder content for the first slide.</p>

              <Link to="/createnewblog" className='text-[24px] mt-4 px-3 py-1   rounded-full bg-amber-600  hover:scale-105 transition ease-in-out duration-300'>Create  New Blog</Link>

              
            </div>
          </div>

          {/* <div className="carousel-item relative float-left w-full h-full bg-gradient-to-r from-amber-500 
                     to-slate-800">
            <img
              src={pic1} 
             
              className="block w-full h-[80vh] mix-blend-overlay"
              alt="..."
            />
            <div className="carousel-caption  flex flex-col justify-center items-center absolute text-center h-full ">
            <h5 className="text-6xl font-bold uppercase tracking-[9px]">Yahtarup</h5>
              <p className="text-[22px] text-center tracking-[3px] capitalize mt-2">Some representative placeholder content for the first slide.</p>
            </div>
          </div> */}

          {/* <div className="carousel-item relative float-left w-full h-full bg-gradient-to-r from-amber-500 
                     to-slate-800">
            <img
              src={pic1}
             
              className="block w-full h-[80vh] mix-blend-overlay"
              alt="..."
            />
            <div className="carousel-caption  flex flex-col justify-center items-center absolute text-center h-full">
            <h5 className="text-6xl font-bold uppercase tracking-[9px]">Yahtarup</h5>
              <p className="text-[22px] text-center tracking-[3px] capitalize mt-2">Some representative placeholder content for the first slide.</p>
            </div>
          </div> */}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
          type="button "
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
         <div className='pt-2 w-10    rounded-full bg-amber-400 text-center'> <span className="carousel-control-prev-icon inline-block bg-no-repeat " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span></div>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <div className='pt-2 w-10   rounded-full bg-slate-800 text-center'>
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span></div>
        </button>
      </div>
    </>
  )
}

export default Slider;