import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../../context/ThemeContext';

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <div>
            <button
                onClick={changeTheme}
                className='px-6 py-3 rounded-md bg-teal-700 hover:bg-teal-600 transition-colors font-medium'
            >
                Change Theme
            </button>
        </div>
    )
}

export default Button