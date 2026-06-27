import React from 'react'
import Rightcardcontent from './Rightcardcontent';

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} />
      <Rightcardcontent id = {props.id} color={props.color} tag={props.tag} intro={props.intro} />
    </div>
  )
}

export default Rightcard
