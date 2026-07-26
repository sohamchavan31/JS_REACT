import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navi = useNavigate() 
  return (
    <>
      <button onClick={()=>{
        navi('/')
      }} className='font-medium bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer scale'>return to homepage</button>
      
      <button onClick={()=>{
        navi(-1)
      }} className='font-medium bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer scale'>Back</button>
      <div className='flex items-center justify-center h-[70vh] text-3xl font-semibold'>About</div>
    </>
  )
}

export default About