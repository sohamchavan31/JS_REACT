import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Men from './Men';
import Women from './Women';

const Product = () => {
  return (
    <div className='px-8 py-6'>
        <div className='flex items-center gap-6 mb-6'>
            <h1 className='text-2xl font-semibold mr-4'>Categories</h1>
            <Link to='/product/men' className='hover:text-gray-300 transition-colors'>Men</Link>
            <Link to='/product/women' className='hover:text-gray-300 transition-colors'>Women</Link>
            <Link to='/product/kids' className='hover:text-gray-300 transition-colors'>Kids</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product