
import { usePosts, useDemo } from '../../FetchDatas/DummyJson';
import EachCategory from './EachCategory';

const FilterCategory = () => {
    
    const datas=usePosts();
    const demos=useDemo();
//  console.log(datas)
    console.log(demos.results)

    
    const categories=['Personal','Eco-musuem','History','Nature','Archelogy','Science','Art & craft','Aviation','Agriculture','Biography','Botanical & Zoology'];

    const sortedCategory=categories.map( cat=>{
        return {
            categories:datas.filter(data=>data.subCategory===cat).slice(0,3),
            categoryName:cat
        }
    })

    
  return (
    <>
         <div className='flex flex-col'>
             {sortedCategory.map(sorted=><EachCategory items={sorted}/>)}
         </div>
    </>
  )
}

export default FilterCategory