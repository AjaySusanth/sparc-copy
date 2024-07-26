import React from 'react'
import './Timeline.css'
import WhiteBg from '../WhiteBg/WhiteBg'
import Heading from '../Heading/Heading'
import CornerIcon from '../LCornericon/LCornericon'
import OppositeContentTimeline from './Day1'
import OppositeContentTimeline2 from './Day2'

function Timeline() {
  return (
    <div>
      <WhiteBg height="auto">
        <CornerIcon />
        <Heading text="Timeline" />
        <h2 className='timeline-date'>September 28</h2>
        <OppositeContentTimeline />
        <h2 className='timeline-date'>September 29</h2>
        <OppositeContentTimeline2 />
      </WhiteBg>
    </div>
  )
}

export default Timeline
