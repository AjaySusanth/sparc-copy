import './Sessions.css';
import Heading from '../Heading/Heading';
import Card from './Card';
import WhiteBg from '../WhiteBg/WhiteBg';
import Rcornericon from '../RCornericon/RCornericon'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';

import 'swiper/css/autoplay'
function Sessions() {
  return (
    <section id="sessions">
    <WhiteBg>
      <Rcornericon/>
      <Heading text="Sessions" className="heading" />
      <div>
        <Swiper
          modules={[Autoplay]}
          speed={800}
          autoplay={true}
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
        >
          <SwiperSlide>
            <div className='card-wrapper'>
              <Card/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-wrapper'>
              <Card/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-wrapper'>
              <Card/>
            </div>
          </SwiperSlide >
          <SwiperSlide>
            <div className='card-wrapper'>
              <Card/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-wrapper'>
              <Card/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-wrapper'>
              <Card/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </WhiteBg>
  </section>
  );
}

export default Sessions;