import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id="right" className='h-full w-3/4 p-5 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
       {props.users.map(function(elem, idx){
        return <Rightcard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} intro={elem.intro}/>
       })}
    </div>
  )
}

export default Rightcontent
