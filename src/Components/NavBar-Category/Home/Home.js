import React,{Suspense} from 'react'
import LatestBlog from './LatestBlog';

import Header from './Section';

// const LatestBlog= React.lazy(()=> import('./LatestBlog'));
// import Slider from './Slider';

// import SliderContainer from './SliderContainer';

// import { IndexContext } from '../../ContextAPi/IndexContext';

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