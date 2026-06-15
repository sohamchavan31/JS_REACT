import React from 'react'
import Card from './components/Cards'
import Nav from './components/Navbar'

const App = () => {
  const user = 'Soham'
  const age = 23
  
  return (
    <>
      <Nav />
      
      <h1>Hello, i am {user}</h1>
      <h2>and I am {age} year old</h2>

      {/* {Card()} */}
      <Card />
    </>
  )
}

export default App
