import React from 'react'
import back from '../resources/back.svg'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div className='w-11/12 mx-auto space-y-4'>
      <div className='flex justify-between mt-10 '>
        <Link to='/create/createPost/'>
          <img src={back} alt='' className='w-10' />
        </Link>
        <Link to='/create/createPost/gallery/postDesc'>
          <button className='rounded-2xl text-white p-3 bg-neutral-600'>Next</button>
        </Link>
      </div>
      <p className='text-center text-zinc-600'>Select from your gallery</p>
      {/* PHOTOS */}
    </div>
  )
}

export default Gallery