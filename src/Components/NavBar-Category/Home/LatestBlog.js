import React from 'react';
import FilterCategory from './FilterCategory';

const LatestBlog = () => {
  return (
    <div>
        <h1 className='text-4xl font-[750]'>Latest <span className='text-amber-500'>Blog</span></h1>
        <FilterCategory/>
    </div>
  )
}

export default LatestBlog;