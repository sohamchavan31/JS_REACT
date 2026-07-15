import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Men from './Men';
import Women from './Women';

const Product = () => {
  return (
    <div>
        <div>
            <h1>Products</h1>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
            <Link to='/product/kids'>Kids</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product