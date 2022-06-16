import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lan Ngo</h1>
        <h5 className="text-light">Software Engineer</h5>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
