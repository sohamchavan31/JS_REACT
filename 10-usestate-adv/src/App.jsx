import React, { useState } from 'react'
import cards from './../../01-Components/src/components/Cards';

const App = () => {
    const [first, setfirst] = useState('yo')

    const [num, setNum] = useState({user:'Danny', age:20, nationality:"USA"})

    const [name, setName] = useState(["joe-", "maria-", "alice-"])

    const [cars, setcars] = useState({volkswagen:"Passat", skoda:"Octavia", honda:"Civic", nissan:"patrol"})

    const [brands, setBrands] = useState(["Lamborghini", "Porsche", "Ferrari", "Buggati", "Koenigsegg"])

    const change = ()=>{
        setfirst('sybau')
    }

    // const btnClick = ()=>{
    //     const newNum = {...num}
    //     newNum.user = 'Daniel'
    //     newNum.age = 22
    //     newNum.nationality = "Canada"
    //     setNum(newNum)
    // }

    const btnClick = ()=>{
        setNum(prev => ({...prev, user: 'Daniel', age: 22, nationality: "Canada"}))
    }

    // const btnclick2 = ()=>{
    //     const newfrnds = [...name]
    //     newfrnds.push("john-", "calvin-", "dustin-")
    //     setName(newfrnds)
    // }

    const btnclick2 = ()=>{
        setName(prev => [...prev, "john-", "calvin-", "dustin-"])
    }

    // const fourwheel = ()=>{
    //     const newCars = {...cars}
    //     newCars.honda = 'amaze'
    //     setcars(newCars)
    // }

    const fourwheel = () => {
        setcars(prev => ({...prev, volkswagen : 'Virtus'}))
    }

    // const morebrand = () => {
    //     const morecars = [...brands]
    //     morebrand.push("AlfaRomeo-", "Fiat-", "Benz-", "Audi-" , "BMW")
    //     setBrands(morecars)
    // }

    const morebrands = () => {
        setBrands(prev => [...prev, "AlfaRomeo-", "Fiat-", "Benz-", "Audi-" , "BMW"])
    }

  return (
      <div>
        <h2>hey i am {num.user}, my age is {num.age} and i am from {num.nationality}</h2>
        <button onClick={btnClick}>click</button>
        <br />

        <h2>my friends are {name}</h2>
        <button onClick={btnclick2}>more friends</button>
        <br />

        <h2>My Cars : {cars.volkswagen} and {cars.nissan}</h2>
        <button onClick={fourwheel}>show</button>
        <br />

        <h2>My fav brands : {brands}</h2>
        <button onClick={morebrands}>view</button>
        <br />

        <h1>{first}</h1>
        <br />
        <button onClick={change}>Click</button>
    </div>
  )
}

export default App