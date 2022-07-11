import React from 'react';
import FilterCategory from './FilterCategory';
import { Helmet } from 'react-helmet';

const LatestBlog = () => {
  return (
    <div>

      <Helmet>
        <title>YATHARUP || HOME</title>
      </Helmet>
        <h1 className='text-4xl font-[750]'>Latest <span className='text-amber-500'>Blog</span></h1>
        <FilterCategory/>
    </div>
  )
}

export default LatestBlog;