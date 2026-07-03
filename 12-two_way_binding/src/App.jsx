import React, { useState } from 'react'

const App = () => {

    const [title, settitle] = useState('')


    const submithandler = (e) => {
        e.preventDefault()
        console.log("Form submitted by", title);

    }

    return (
        <div>
            <form onSubmit={(e) => {
                submithandler(e)
            }}>
                <input type="text" placeholder='enter your name...' value={title} onChange={(e)=>{
                    settitle(e.target.value);
                    
                }}/>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default App