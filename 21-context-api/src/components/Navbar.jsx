import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../../context/ThemeContext'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext)
    return (
        <div className={`flex items-center justify-between px-8 py-4 transition-colors ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <h2 className='text-xl font-semibold'>Sheryians</h2>
            <Nav2 />
        </div>
    )
}

export default Navbar