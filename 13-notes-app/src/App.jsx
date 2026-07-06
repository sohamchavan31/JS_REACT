import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [desc, setdesc] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, desc);

    const values = [...task]

    values.push({ title, desc })

    settask(values)

    setTitle('')
    setdesc('')
  }

  const deleteNote = (idx)=>{
    const values = [...task]
    values.splice(idx,1)
    settask(values)
    console.log("note deleted")
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 p-10 lg:w-1/2 items-start flex-col'>
        <h1 className='text-4xl font-bold '>Add notes</h1>
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          placeholder='Write Details'
          className='px-5 w-full h-20 py-2 border-2 outline-none rounded'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button
          type='submit'
          className='bg-white w-full outline-none text-black px-5 py-2 rounded active:scale-95'
        >
          Save Note
        </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10 '>
        <h1 className='text-4xl font-bold '>Recent notes</h1>
        <div className='flex flex-wrap overflow-auto h-[90%] gap-5 mt-5'>
          {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-500'>{elem.desc}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App 