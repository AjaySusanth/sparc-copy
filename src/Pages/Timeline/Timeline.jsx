import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Timeline.css';
import WhiteBg from '../WhiteBg/WhiteBg';
import Heading from '../Heading/Heading';
import CornerIcon from '../LCornericon/LCornericon';
import OppositeContentTimeline from './Day1';
import OppositeContentTimeline2 from './Day2';

function Timeline() {
  return (
    <section id='timeline' className='section'>
      <WhiteBg height="auto">
        <CornerIcon />
        <Heading text="Timeline" />
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={false}
          emulateTouch={true}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} className="custom-arrow custom-arrow-prev">
                &#8249;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} className="custom-arrow custom-arrow-next">
                &#8250;
              </button>
            )
          }
        >
          <div>
            <h2 className='timeline-date'>October 19</h2>
            <OppositeContentTimeline />
          </div>
          <div>
            <h2 className='timeline-date'>October 20</h2>
            <OppositeContentTimeline2 />
          </div>
        </Carousel>
      </WhiteBg>
    </section>
  );
}

export default Timeline;
