import React from 'react';
import { useUserPosts } from '../FetchDatas/DummyJson';
import { useParams } from 'react-router-dom';
import GalleryContainer from '../SharedComponent/GalleryContainer';

const UserGallery = () => {
  const {username}=useParams();
  const {results}=useUserPosts(username);
  return(
   <div>
    <h1>hello</h1>
  {results?.length?<GalleryContainer itemList={results}/>

  :<p className='text-2xl font-bold text-center w-full mb-7'>No Images to display</p>}
    </div>
    
   
  )
}

export default UserGallery