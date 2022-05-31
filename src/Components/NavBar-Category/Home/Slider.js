import React from 'react';
import pic1 from "../../../assets/pic1.jpg";


const Slider = () => {

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide relative " data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden ">
          {/* <div className=" carousel-item active relative float-left w-full sm:h-[300px] md:h-[500px] bg-gradient-to-b from-amber-800 to-amber-700"> */}
          <div className=" carousel-item active relative float-left w-full sm:h-[300px] md:h-[500px] bg-gradient-to-r from-amber-500 
                     to-slate-800">

            <img
              src={pic1}

              className="block w-full h-full  mix-blend-overlay"
              alt="..."
            />
            <div className="carousel-caption  flex flex-col justify-center items-center absolute text-center h-full">
              <h5 className="text-7xl font-bold ">Digital Museum</h5>
              <p className="text-xl text-center">Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full sm:h-[300px] md:h-[500px]">
            <img
              src={pic1}
              // src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption  flex flex-col justify-center items-center absolute text-center h-full">
              <h5 className="text-7xl font-bold">Second slide label</h5>
              <p className="text-xl text-center">Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full sm:h-[300px] md:h-[500px]">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption  flex flex-col justify-center items-center absolute text-center h-full">
              <h5 className="text-7xl font-bold">Third slide label</h5>
              <p className="text-xl text-center">Some representative placeholder content for the third slide Some representative placeholder content for the third slide Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider;