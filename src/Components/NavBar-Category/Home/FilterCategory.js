
import axios from 'axios';
import { useCategory } from '../../FetchDatas/DummyJson';
import EachCategoryLists from './EachCategoryLists';


// import EachCategory from './EachCategory';

const FilterCategory = () => {



  const categoriesList=useCategory();
  
  // const sliceCategory=categoriesList && categoriesList.slice(0,3);

   
  
  

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