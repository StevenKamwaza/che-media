import React from 'react'
import DataEntry from './DataEntry'
import Stories from './feeds/Stories'
import Posts from './Posts'

function MediaFeed() {
  return (
    <div className='flex-grow pb-44 pt-6 h-screen pt-6 mr-4 xlimr-40 overflow-y-auto'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <Stories/>
        <DataEntry/>
        <Posts/>
      </div>
    </div>
  )
}

export default MediaFeed