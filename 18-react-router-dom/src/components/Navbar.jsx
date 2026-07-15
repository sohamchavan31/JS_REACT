import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-8 py-4 bg-black text-white'>
            <h3 className='text-xl font-bold'>SOHREX</h3>
            <div className='flex gap-6'>
                <Link to='/' className='hover:text-gray-300 transition-colors'>Home</Link>
                <Link to='/about' className='hover:text-gray-300 transition-colors'>About</Link>
                <Link to='/contact' className='hover:text-gray-300 transition-colors'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar