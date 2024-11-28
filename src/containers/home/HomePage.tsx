import React from 'react'
import SearchContainer from './SearchContainer'
import Services from './Services'

const HomePage = () => {
  return (
    <div className='lg:mt-16 lg:mb-16'>
      <SearchContainer />
      <Services />
    </div>
  )
}

export default HomePage