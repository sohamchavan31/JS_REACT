import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setindex] = useState(1)

  const fetchData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function () {
    fetchData()
  }, [index])

  let printUserData = <h3 className='text-gr text-xs absolute top-1/2 left-1/2 -ranslate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={elem.id}>
        
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='fixed text-6xl'>{index}</h1>
      <div className='flex flex-wrap gap-3'>
        {printUserData}
      </div >
      <div className='flex justify-center gap-6 items-center'>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-bold' onClick={() => {
          if (index > 1) {
            setindex(index - 1)
            setUserData([])
          }
        }}>prev</button>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-bold' onClick={() => {
          setindex(index + 1)
          setUserData([])
        }}>next</button>
      </div>
    </div>
  )
}

export default App