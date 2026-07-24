import { useContext } from "react"
import { ThemeDataContext } from "../../context/ThemeContext"

const Nav2 = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)
    
    return (
        <div className='flex items-center gap-6'>
            <h4 className='cursor-pointer hover:opacity-70 transition-opacity'>Home</h4>
            <h4 className='cursor-pointer hover:opacity-70 transition-opacity'>About</h4>
            <h4 className='cursor-pointer hover:opacity-70 transition-opacity'>Contact</h4>
            <h4 className='cursor-pointer hover:opacity-70 transition-opacity'>Services</h4>
            <h4 className='text-sm opacity-60'>({theme})</h4>
        </div>
    )
}

export default Nav2