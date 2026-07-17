import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-teal-800'>
      <h1 className='text-xl font-semibold'>SOHREX</h1>
      <div className='flex gap-8'>
        <Link to='/' className='hover:text-gray-300 transition-colors'>Home</Link>
        <Link to='/brand' className='hover:text-gray-300 transition-colors'>Brands</Link>
        <Link to='/product' className='hover:text-gray-300 transition-colors'>Categories</Link>
        <Link to='/about' className='hover:text-gray-300 transition-colors'>About</Link>
        <Link to='/contact' className='hover:text-gray-300 transition-colors'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar