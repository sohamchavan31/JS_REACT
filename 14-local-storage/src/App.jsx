import { json } from 'express'
import React from 'react'

const App = () => {

  localStorage.setItem("user", "Soham")
  localStorage.setItem("age", 22)

  const user = localStorage.getItem('user')
  console.log(user);

  const age = localStorage.getItem('age')
  console.log(age);

  localStorage.removeItem('age')
  localStorage.removeItem('user')

  localStorage.clear

  const users = {
    name : "soham",
    age : 23,
    city : "Bhopal"
  }

  localStorage.setItem('users' , JSON.stringify(users))

  const group = JSON.parse(localStorage.getItem('users'))
   
  console.log(group);

  return (
    <div>App</div>
  )
}

export default App