import React from 'react';
import { useCategory } from '../../FetchDatas/DummyJson';
import EachCategoryLists from './EachCategoryLists';
// import EachCategory from './EachCategory';

const FilterCategory = () => {


  const categoriesList=useCategory();

  return (
    <>
      <div className='flex flex-col '>
    {
          categoriesList && categoriesList.map(eachCat=>{
           

           return (
             <EachCategoryLists eachCategory={eachCat.name}/>
           )

         
          })
        }

      </div>


    </>
  )
}

export default FilterCategory;