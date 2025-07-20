import React from 'react'
import './about.css'
import ME from '../../assets/snow.jpg'
import {BsKeyboardFill} from 'react-icons/bs'
import {FaSnowboarding} from 'react-icons/fa'
import {GiCook} from 'react-icons/gi'

function About() {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-image'>
          <img src={ME} alt="Alice"/>
        </div>
      </div>
    <div className='about_content'>
      <div className='about_cards'>
        <article className='about_card'>
        < BsKeyboardFill className='about_icon'/>
          <h5>Coding</h5>
        </article>
        <article className='about_card'>
        <FaSnowboarding className='about_icon'/>
          <h5>Outdoor Activities </h5>
        </article>
        <article className='about_card'>
        <GiCook className='about_icon'/>
          <h5>Cooking</h5>
        </article>
      </div>
      <p>
      Hi, I'm a full-stack software engineer based in Melbourne, Australia, with over 2 years of experience building scalable web and cloud applications.    
      <br />
      At Gentrack, I work on real-time energy systems—developing solutions for electricity billing, metering data analysis, and workflow automation. I enjoy solving complex problems, whether it’s debugging a tricky backend issue or optimising front-end performance.
      <br />
      My technical toolkit includes React, Next.js, TypeScript, SQL, and CI/CD pipelines, and I’m always open to learning new tools that help deliver better outcomes. I care deeply about clean architecture, accessible UI, and building systems that improve operational efficiency.
      <br />
      Outside of tech, I love spending time outdoors, exploring nature, cooking, and trying out new food spots. I'm always curious, always learning—and looking forward to the next challenge.
    </p>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
    </section>
  )
}
export default About