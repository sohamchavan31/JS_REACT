import React, { useState } from 'react'
import axios from './../node_modules/axios/lib/axios';

const App = () => {

  const [data, setdata] = useState([])

  // function getData(param) {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }

  // async function getData(param) {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }

  // const getData = async()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log(data);
  // }

  const getData = async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setdata(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx) {
          console.log(elem);
          return <h3 key={idx}>{elem.title}</h3>
        })}
      </div>
    </div>
  )
}

export default App