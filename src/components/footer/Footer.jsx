/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

function Footer() {
  return (
    <footer>
      {/* 添加了有意义的href值 */}
      <a href="/" className='footer_logo'>Alice</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#testimonials">Testimonials</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        {/* 添加了rel="noopener noreferrer"和安全链接 */}
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FiInstagram />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; {new Date().getFullYear()} All rights reserved by AliceW</small>
      </div>
    </footer>
  )
}

export default Footer