import React from 'react'
import './About.css';
import Heading from '../Heading/Heading'
import WhiteBg from '../WhiteBg/WhiteBg';

function About() {
  return (
    <div>
      <div className='about'>  
        <WhiteBg height="950px"  >
          <Heading text="About sparc" />
        </WhiteBg>
      </div>
    </div>
  )
}

export default About
