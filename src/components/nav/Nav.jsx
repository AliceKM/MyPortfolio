/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid */
import React from 'react'
import  './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import {MdOutlinePermPhoneMsg} from 'react-icons/md'
import {TbApps} from 'react-icons/tb'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
     <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className ={activeNav === '#about' ? 'active' :'' }><SiAboutdotme/> </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className= {activeNav ==='#experience' ? 'active' :''}><GiSkills/> </a>
      <a href="#portfolio"  onClick={()=>setActiveNav ('#portfolios')} className= { activeNav === '#portfolio' ? 'active' :''}><TbApps/> </a>
      <a href="#contact" onClick={()=> setActiveNav ('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><MdOutlinePermPhoneMsg/> </a>

      </nav>

  )


   
}

export default Nav