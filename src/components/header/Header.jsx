import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/winter-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
    <div className='container header_container'>
      <h5>Hello I'm</h5>
      <h1>Alice Wang</h1>
      <h5 className='text-light'>Font End Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        <img className='me-photo' src={ME} alt="me" />

      </div>

      <a href="#contact" className='scroll_down'>scroll down</a>

    </div>
    </header>
  )
}

export default Header