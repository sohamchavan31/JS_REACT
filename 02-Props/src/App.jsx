import React from 'react'
import Card from './components/Card'

const App = (name) => {
  return (
    <div>
      <Card user='Vivian' age={31} img = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400'/>
      <Card user='Karen' age={21} img = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' />
    </div>
  )
}

export default App
