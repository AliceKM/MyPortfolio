
import React from 'react'
import{ BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{DiCodepen} from 'react-icons/di'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/alice-wang-b9961192" target="_blank" rel="noopener noreferrer"  ><BsLinkedin  size={'1.5em'} /></a>
        <a href="https://github.com/AliceKM" target="_blank" rel="noopener noreferrer"  ><BsGithub  size={'1.5em'} /></a>
        <a href="https://codepen.io/Alicewangkm" target="_blank" rel="noopener noreferrer"  >< DiCodepen size={'2em'}/></a>
    </div>
  )
}

export default HeaderSocials