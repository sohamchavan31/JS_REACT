import React from 'react'

const Navbar = (props) => {

    function changeTheme() {
        props.settheme('dark')
    }

  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar