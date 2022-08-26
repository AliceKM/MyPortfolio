
import './testimonials.css'
import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';



const data = [

  {
    avatar :AVTR1,
    name: 'UPON REQUEST 1',
    review: 'N/A'
  },
  {
    avatar :AVTR2,
    name: 'UPON REQUEST 2',
    review: 'N/A'
  },
  {
    avatar :AVTR3,
    name: 'UPON REQUEST 3',
    review: 'N/A'
  },
  {
    avatar :AVTR4,
    name: 'UPON REQUEST 4',
    review: 'n/a'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      // install Swiper modules
      modules={Pagination}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
        {data.map(({avatar, name,review},index)=> {
          return(
          <SwiperSlide key={index} className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar}  />
          
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
            
            </small>

          
        </SwiperSlide>
          )

        })}
        {/* <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              kjsl jkdjlkj skldj fld jklaw jefkldj lsj afskljf dlkfa slkafjsd
              dasjkhfdklfdlskjfdslfjdlfjel
            
            </small>

          
        </article>
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              kjsl jkdjlkj skldj fld jklaw jefkldj lsj afskljf dlkfa slkafjsd
              dasjkhfdklfdlskjfdslfjdlfjel
            
            </small>

          
        </article>
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar One" />
             </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              kjsl jkdjlkj skldj fld jklaw jefkldj lsj afskljf dlkfa slkafjsd
              dasjkhfdklfdlskjfdslfjdlfjel
            
            </small>

         
        </article>
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              kjsl jkdjlkj skldj fld jklaw jefkldj lsj afskljf dlkfa slkafjsd
              dasjkhfdklfdlskjfdslfjdlfjel
            
            </small>

          
        </article> */}


      </Swiper>
    </section>
  )
}

export default Testimonials
