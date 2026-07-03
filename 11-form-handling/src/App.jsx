import React from 'react'

const App = () => {

  const submithandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted");
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text" placeholder='enter your name...' />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App