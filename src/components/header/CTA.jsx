import React from 'react'
import CV from '../../assets/Alice-Wang-V1.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV}download className='btn btn-primary'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
  )
}

export default CTA