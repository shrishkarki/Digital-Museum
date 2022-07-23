import React from 'react'

const GalleryContainer = ({itemList}) => {
  return (
    <section className=" text-gray-700 ">
    <div className=" md:px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div className="flex flex-wrap m-1 md:-m-2">


        {itemList  && itemList.map(filterData => {
          const singleImage=[...filterData.images.slice(0,1)]
          return <div className="flex flex-wrap w-1/2  tmd:w-1/3   ">
            <div className="w-full relative rounded-lg   tmd:bg-none tmd:hover:bg-gradient-to-r from-amber-500 to-slate-500  m-1 md:m-2 duration-300 ease-in-out hover:scale-[1.06] ">
            {/* <div className="w-full relative rounded-lg  hover:bg-gradient-to-r from-amber-500  to-slate-500  tmd:bg-none   m-1 md:m-2 duration-300 ease-in-out hover:scale-[1.06] "> */}

             {singleImage.map(eachImg=>(<img alt="gallery" className="  block object-cover object-center shadow-md shadow-black w-full h-56 scale-100 rounded-lg mix-blend-multiply"
                src={eachImg.image_url}/>)) }

              <div className=' tmd:opacity-0 tmd:hover:opacity-100 absolute rounded-lg top-0  right-0 bottom-0 left-0 w-full h-full  overflow-hidden bg-fixed  text-white'>
               
                <p className='px-3 absolute top-[75%] truncate text-lg backdrop-blur-3xl w-full capitalize'>{filterData.title}</p>
              {/* <div className='border-t-[1px] border-solid border-zinc-200 w-full'></div> */}
              
              <figcaption className='px-6 absolute top-[80%] mt-4 backdrop-blur-3xl w-full'><span>{filterData.like_count} Likes</span><span></span></figcaption>
               
              
              
              </div>
            



            </div>
          </div>
        })}
      </div>
    </div>
  </section>
  )
}

export default GalleryContainer