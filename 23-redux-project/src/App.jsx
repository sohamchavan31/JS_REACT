import React from 'react'
import { fetchPhotos, fetchGIF, fetchVideo } from "./api/mediaApi";

const App = () => {
  function getPhotos() {
    fetchPhotos()
  }
  return (
    <div className='h-screen w-full bg-gray-950 text-white text-6xl'>
      <button className='bg-green-300 px-4 py-2 m-5' onClick={async ()=>{
        const data = await fetchPhotos('cat')
        console.log(data);
      }}>Get Photos</button>

      <button className='bg-green-300 px-4 py-2 m-5' onClick={async ()=>{
        const data = await fetchGIF('cat')
        console.log(data);
      }}>Get GIF</button>

      <button className='bg-green-300 px-4 py-2 m-5' onClick={async () => {
        const data = await fetchVideo('cat')
        console.log(data);
      }}>Get Videos</button>
    </div>
  )
}

export default App