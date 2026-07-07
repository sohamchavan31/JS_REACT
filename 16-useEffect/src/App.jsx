import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [A, setA] = useState(0)
  const [B, setB] = useState(0)

  function Achange() {
    console.log("A value is changed");
  }

  function Bchange() {
    console.log("B value changed");
  }

  useEffect(function() {
    Achange()
  },[B])

  return (
    <div>
      <h1>A is {A}</h1>
      <h1>B is {B}</h1>
      <button onClick={()=>{
        setA(A+1)
      }}>button A</button>
      <button onClick={()=>{
        setB(B-1)
      }}>button B</button>
    </div>
  )
}

export default App


/* 
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(e)
  const [num2, setNum2] = useState(100)

  useEffect(function () {
    console.log('use effect is running ... ');
  }, [num])

  return (
    <div>
      <h1>num (num)</h1>
      <h1>num2 {num2}</h1>

      <button
        onMouseEnter={() => {
          setNum(num + 1)
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10)
        }}
      >
        Hover
      </button>

    </div>
  )
}
export default App
*/