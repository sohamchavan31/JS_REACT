import { useContext } from 'react'
import Button from './components/Button'
import Navbar from './components/Navbar'
import { ThemeDataContext } from '../context/ThemeContext'

const App = () => {
  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar />
      <div className='flex items-center justify-center h-[70vh]'>
        <Button />
      </div>
    </div>
  )
}

export default App