import React from 'react'
import './experience.css'
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Javascript from '../../assets/javascript.png'
import Reactlog from '../../assets/react.png'

function Experience() {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
      <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
        <img src={Html} alt="" className='experience_details-icon' />
      
        <h4>HTML</h4> 
        <small className='text-light'>Experienced</small>
        
          </article>
          <article className='experience_details'>
          <img src={Css} alt="" className='experience_details-icon' />
        <h4>CSS</h4> 
        <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
          <img src={Javascript} alt="" className='experience_details-icon' />

        <h4>JavaScript</h4> 
        <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience_details'>
          <img src={Reactlog} alt="" className='experience_details-icon' />

      
        <h4>React</h4> 
        <small className='text-light'>Intermediate</small>
          </article>
          
        

        </div>
        </div>  
        
      </div> 
    </section>
  )
}

export default Experience
