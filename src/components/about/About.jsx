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
          <img src={ME} alt="About Image" />
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
        
      I’m a junior front-end developer looking for a new role in an exciting company.  I started my journey as a coder (Logo Programming Language) when I was a kid, although .In the years the passionate about coding was always inside me.Lately, I have discovered my passion for the world of Web development and Self- taught to become front-end developer. 
  <br />
  I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can learn adapt to whatever tools are required. I’m based in Melbourne,VIC,Australia. I’m happy working remotely . When I’m not coding, you’ll find me outdoors. I love being out in nature whether . I also enjoy cooking and explore delicious foods.

  
    </p>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
    </section>
  )
}
export default About