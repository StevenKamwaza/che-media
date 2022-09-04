import Image from 'next/image';
import React from 'react'

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {/* data.map */}
      <MediaCard name="Steven Che" src="/che.jpg" prof=""/>
      <MediaCard name="Steven Che" src="/che1.jpg" prof=""/>
      <MediaCard name="Steven Che" src="/che3.jpg" prof=""/>
      <MediaCard name="Steven Che" src="/che4.jpg" prof=""/>
    </div>
  )
}

export default Stories;

export function MediaCard({story,src,prof}){
  return(
    <div className='relative h-14 w-14 md:h-20 md:h-20 lg:h-56 lg:w-40 cursor-pointer
     overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <Image
        className='absolute opacity-8 lg:opacity-100 rounded-full z-50 top-10 md:hidden'
        src={src}
        width={40}
        height ={40}
        layout ="fixed"
        objectFit='cover'
      />
      <Image
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        src={src}
        layout="fill"
      />
    </div>
  )
}
