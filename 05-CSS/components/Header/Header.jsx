import React from 'react'
import styles from './Header.module.css'



const Header = () => {
  return (
    <div>
      <div className={styles.header}></div>
      <h3 className={styles.logo}>Sohrex</h3>
      <button className={styles.btn}>SUBMIT</button>
    </div>
  )
}

export default Header
