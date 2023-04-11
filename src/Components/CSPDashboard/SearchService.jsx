import React, { useState } from 'react'

function SearchService({searchService}) {
  const [searchQuery, setsearchQuery] = useState();
  return (
    <div className='search-box mt-5'>
      <input onChange={(e)=>setsearchQuery(e.target.value)} type="text" name="" id="" placeholder='Search Services by name like - EC2 or by tag name like - storage' />
      <button className='' onClick={()=>searchService(searchQuery)}>Search</button>
    </div>
  )
}

export default SearchService