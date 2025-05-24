import React from 'react'
import '../styles/header.css'
import logo from '../assets/Z-bold-no-bg.png'
function Header() {
  return (
    <header className='header'>
      <nav className='navbar-nav'>
      <img src={logo} alt="Zenith Logo" />
        <ul className='navbar-menu'>
          <li className='nav-item'><a href="#home">Home</a></li>
          <li className='nav-item'><a href="#about">About</a></li>
          <li className='nav-item'><a href="#project">Projects</a></li>
          <li className='nav-item'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* <nav className='navbar-ham'>
        <ul className='hamburger-menu'>
          <li className='hamburger-item'><a href="#home">Home</a></li>
          <li className='hamburger-item'><a href="#about">About</a></li>
          <li className='hamburger-item'><a href="#project">Projects</a></li>
          <li className='hamburger-item'><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header

