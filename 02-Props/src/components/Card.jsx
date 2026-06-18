import React from 'react'
import user from './../../../app';

const Card = (props) => {
  // console.log(props);
  return (
    <div className='parent '>
      {/* <h1>Props</h1> */}
      <div className="card">
        <img src={props.img}/>
        <h2>{props.user}, {props.age}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum optio recusandae harum corrupti id reprehenderit nihil distinctio quibusdam ratione. Rerum nisi at aspernatur dolor.</p>
        <button>View Profile </button>
      </div>
    </div>
  )
}

export default Card
