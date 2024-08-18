import './Sessions.css';
import Heading from '../Heading/Heading';
import SessionsCard from './SessionsCard';
import WhiteBg from '../WhiteBg/WhiteBg';
import Rcornericon from '../RCornericon/RCornericon'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import img1 from '../../assets/Images/Young man making a presentation.png'
import img2 from '../../assets/Images/Young woman working on a computer.png'

import 'swiper/css/autoplay'
import { useRef } from 'react';
function Sessions() {

  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className='section' id="sessions">
    <WhiteBg>
      <Rcornericon/>
      <Heading text="Sessions" className="heading" />
      <div>
        <Swiper
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay:1000,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
              640:{
                  slidesPerView: 1,

              },
              868: {
                  slidesPerView: 2,
                  spaceBetween:10
                },
              1700:{
                slidesPerView: 3,
              }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
           <SwiperSlide>
            <div className='card-wrapper'>
              <SessionsCard top={-80} left={-45} smLeft={-45} img={img2} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-wrapper'>
              <SessionsCard top={-110} left={40} smLeft={60} img={img1} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='card-wrapper'>
              <SessionsCard top={-80} left={-45} smLeft={-45} img={img2} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-wrapper'>
              <SessionsCard top={-110} left={40} smLeft={60} img={img1} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='card-wrapper'>
              <SessionsCard top={-80} left={-45} smLeft={-45} img={img2} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-wrapper'>
              <SessionsCard top={-110} left={40} smLeft={60} img={img1} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
            </div>
          </SwiperSlide> 

        </Swiper>
      </div>
    </WhiteBg>
  </section>
  );
}

export default Sessions;