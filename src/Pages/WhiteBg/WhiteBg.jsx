import React from 'react'
import './WhiteBg.css'

function WhiteBg({height, children}) {
  return (
    <div className="white-bg" style={{height}}>
      {children}
    </div>
  )
}

export default WhiteBg
