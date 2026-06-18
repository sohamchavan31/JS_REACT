import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <img src={props.logo} alt={props.company} />
                <div className='card-header-info'>
                    <h2 className='company'>{props.company}</h2>
                    <p className='posted'>{props.posted}</p>
                </div>
                <button className='save'>{props.btn1} <Bookmark /> </button>
            </div>
            <p className='position'>{props.position}</p>
            <div className='tags'>
                <span className='tag'>{props.info1}</span>
                <span className='tag'>{props.info2}</span>
            </div>
            <div className='card-footer'>
                <div className='details'>
                    <p className='salary'>{props.salary}</p>
                    <p className='location'>{props.loc}</p>
                </div>
                <button className='apply'>{props.btn2}</button>
            </div>
        </div>
    )
}

export default Card
