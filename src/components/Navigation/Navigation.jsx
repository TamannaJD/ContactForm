import React from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {

  console.log(styles); 
  return (
    <div>
      <nav className= {
        `${styles.navigation} container`
      }>
        <div className='logo'>
            <img src="/images/logo.png" alt="Logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    </div>
  )
}

export default Navigation;
