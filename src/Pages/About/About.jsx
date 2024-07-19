import React from 'react'
import './About.css';
import Heading from '../Heading/Heading'
import WhiteBg from '../WhiteBg/WhiteBg';
import Image from '../../assets/Images/Teamwork with team joining their efforts.png'

function About() {
  return (
    <div>
      <div className='about'>  
        <WhiteBg height="auto"  >  
          <img src={Image} alt="" className='about-image' />
          <Heading text="About sparc" />
          <p className='about-text'>“The Student Professional Awareness Regional Conclave (SPARC), hosted by IEEE MACE SB, is a dynamic event 
            focused on bridging academic and corporate needs. It emphasises developing soft skills and professional proficiencies through sessions 
            by industry experts and competitions refining non-technical abilities. SPARC addresses the crucial gap in communication and 
            collaboration skills among students, aiming to equip them with the tools to succeed in the job market and make informed career 
            decisions.”</p>
        </WhiteBg>
      </div>
    </div>
  )
}

export default About
