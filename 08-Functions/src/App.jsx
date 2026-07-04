import React from 'react'

const App = () => {

  function btnclicked() {
    console.log('button is clicked');
  }

  function inputchanging(elem) {
    console.log(elem.target.value);
  }

  function pagescrolling(elem) {
    console.log(elem.deltaY);
  }

  return (
    <div>
      <h1>hello guys</h1>
      <button onClick={btnclicked}>Change User</button>

      <button onMouseEnter={function () {
        console.log("Mouse entered");
      }}>Explore This</button>

      <button onMouseLeave={() => {
        console.log("Mouse left");
      }}>Rate Us</button>

      <div>
        <input onClick={() => {
          console.log("clicked");
        }} type="text" placeholder='Enter Name' />
      </div>

      <div>
        <input onChange={inputchanging} type="text" placeholder='Enter Surename' />
      </div>

      <div onScroll={pagescrolling} style={{ height: '100vh', overflow: 'auto' }}>
        <div className='page1'>Page1</div>
        <div className='page2'>Page2</div>
        <div className='page3'>Page3</div>
      </div>

    </div>
  )
}

export default App
