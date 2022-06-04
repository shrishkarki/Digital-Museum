import React from 'react';
import { useDemo } from '../../FetchDatas/DummyJson';

const ImageContainer = ({ type }) => {
  const datas = useDemo();
  const imageFilter = datas.filter(data => {
    // return data.subCategory===type
    if (type === 'All') {
      return datas
    }
    else {
      return data.subCategory === type
    }
  })

  return (
    <>
      <section className=" text-gray-700 ">
        <div className=" md:px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap m-1 md:-m-2">


            {imageFilter.map(filterData => {
              return <div className="flex flex-wrap w-1/2  tmd:w-1/3   ">
                <div className="w-full relative rounded-lg  bg-gradient-to-r from-amber-500  to-slate-500  tmd:bg-none tmd:hover:bg-gradient-to-r from-amber-500 to-slate-500  m-1 md:m-2 duration-300 ease-in-out hover:scale-[1.06] ">

                  <img alt="gallery" className="  block object-cover object-center shadow-md shadow-black w-full h-full scale-100 rounded-lg mix-blend-multiply"
                    src={filterData.image}></img>

                  <div className=' tmd:opacity-0 tmd:hover:opacity-100 absolute rounded-lg top-0  right-0 bottom-0 left-0 w-full h-full  overflow-hidden bg-fixed  text-white'>
                  <p className='px-4 absolute top-[45%]'>{filterData.title}</p>
                  <div className='border-t-[1px] border-solid border-zinc-200 w-full'></div>
                  
                  <figcaption><span>30 Likes</span><span></span></figcaption>
                  
                  </div>
                



                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageContainer