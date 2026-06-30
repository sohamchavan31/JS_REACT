import React from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(30)
  const [username, setusername] = useState('sohamazing')
  const [users, setusers] = useState(["Karna-" , "Dhuryodhana"])

  function change(){
    setA (40)
    setusername('sohrex')
    setusers(["Bhima-" , "Arjuna"])
  }
     
  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num+1)
  }

  function decreaseNum(){
    setnum(num-1)
  }

  function multipleof2(){
    setnum(num*2)
  }

  function clearnum(){
    setnum(num*0)
  }


  return (
    <div>
      <h2>Value of rank is {a}, value of username is {username} and values of user's allies is {users}</h2>
      <button onClick={change}>Click</button>

      <br />

      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={multipleof2}>Multiply by 2</button>
      <button onClick={clearnum}>Clear</button>
    </div>
  )
}

export default App
