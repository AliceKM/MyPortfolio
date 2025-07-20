
import React from 'react'
import{ BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{DiCodepen} from 'react-icons/di'

function HeaderSocials() {
  return (
    <div className='header_socials'>
  <a 
    href="https://www.linkedin.com" 
    style={{ color: 'var(--color-primary)' }}
  >
    <BsLinkedin size={'1.5em'} />
  </a>
  <a 
    href="https://github.com" 
    style={{ color: 'var(--color-white)' }}
  >
    <BsGithub size={'1.5em'} />
  </a>
  <a 
    href="https://codepen.io" 
    style={{ color: 'var(--color-primary-variant)' }}
  >
    <DiCodepen size={'2em'} />
  </a>
</div>
  )
}

export default HeaderSocials