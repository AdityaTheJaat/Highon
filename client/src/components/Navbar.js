import React from 'react'
import Logo from '../resources/Logo.jpg'
import add from '../resources/add.svg'
import search from '../resources/search.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between mt-10 sticky mx-auto w-11/12'>
      <div>
        <img src={Logo} alt='Highon' className='w-20' />
      </div>
      <div className='flex'>
        <img src={add} className='w-10 rounded-2xl p-1' />
        <img src={search} className='w-10 p-1' />
      </div>
    </div>
  )
}

export default Navbar