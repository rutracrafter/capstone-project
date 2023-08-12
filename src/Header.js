import React from 'react'
import logo from "./assets/Logo.svg";
import Nav from './Nav';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <a href="/"><img src={logo} alt="logo" className='logo' /></a>
      <Nav />
    </header>
  )
}

export default Header