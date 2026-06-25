import React from 'react'

const Rightcard = () => {
  return (
    <div className='h-full w-80 overflow-hidden relative p-6 rounded-4xl'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="working professionals" />

        <div className='absolute top-0 left-0 h-full w-full'>
            <h2>1</h2>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus quia eveniet praesentium, corporis voluptatum!</div>
            <button>Satisfied</button>
            <button><i class="ri-arrow-right-line"></i></button>
        </div>
    </div>
  )
}

export default Rightcard
