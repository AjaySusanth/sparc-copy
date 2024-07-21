import React from 'react'
import './Timeline.css'
import WhiteBg from '../WhiteBg/WhiteBg'
import Heading from '../Heading/Heading'
import CornerIcon from '../LCornericon/LCornericon'

function Timeline() {
  return (
    <div>
      <WhiteBg height="auto">
        <CornerIcon />
        <Heading text="Timeline" />
      </WhiteBg>
    </div>
  )
}

export default Timeline
