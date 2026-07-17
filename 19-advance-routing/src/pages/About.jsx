import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navi = useNavigate()

  const btnclicked = ()=>{
    navi('/')
  }
  return (
    <>
      <button onClick={btnclicked} className='font-medium bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer scale'>return to homepage</button>
      <div className='flex items-center justify-center h-[70vh] text-3xl font-semibold'>About</div>
    </>
  )
}

export default About