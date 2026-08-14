import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount } from './redux/features/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  
  const count = useSelector((state)=>state.counter.value)

  const [num, setnum] = useState(5)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increment())}}>increment</button>
      <button onClick={()=>{dispatch(decrement())}}>decrement</button>
      <input value={num} type="number" onChange={(e)=>{setnum(e.target.value)}} />
      <button onClick={()=>{dispatch(incrementbyAmount(Number(num)))}}>Increase by {num}</button>
    </div>
  )
}

export default App