

import { usePosts, useDemo } from '../../FetchDatas/DummyJson'
import EachCategory from './EachCategory';

const FilterCategory = () => {

  const { results } = usePosts();



  const categoryValues = ['Personal', 'Eco-musuem', 'History', 'Nature', 'Archelogy', 'Science', 'Art & craft', 'Aviation', 'Agriculture', 'Biography', 'Botanical ', 'Zoology'];

  const sortedCategory = categoryValues.map(cat => {
    return {
      categories: (results && results.filter(dat => dat.category === cat).slice(0, 3)),
      categoryName: cat,

    }
  })
  


  return (
    <>
      <div className='flex flex-col'>
        
        {
          sortedCategory && sortedCategory.map((sorted) => {
            return (
              <div>
                {sorted.categories && <EachCategory items={sorted} />}
              </div>
            )
          })
        }

      </div>


    </>
  )
}

export default FilterCategory