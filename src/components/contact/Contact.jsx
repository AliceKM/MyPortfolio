import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine}  from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wirb06v', 'template_v7ogoz7', form.current, '_OYaS-mCJzXdEOpqt')
     e.target.reset() 
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'> 
          <article className='contact_option'>
        <  MdOutlineEmail className='contact_option-icon '/>
          <h4>Email</h4>
          <h6>AliceWang.km@gmail.com</h6>
          <a href="mailto: AliceWang.km@gmail.com" target="_blank">Send a message</a>
          </article>   
          <article className='contact_option'>
        <  RiMessengerLine className='contact_option-icon' />
          <h4>Messages</h4>
          <h5>AliceWang</h5>
          <a href="https://m.me/alice.wang.9480" target="_blank" >Send a message</a>
          </article>
          <article className='contact_option'>
        < BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+12356789</h5>
          <a href="https://api.whatsapp.com/send?phone+4325674058" target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div> 
    </section>
  )
}
export default Contact