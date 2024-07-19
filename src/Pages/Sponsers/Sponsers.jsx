import React from 'react'
import './Sponsers.css'
import icon from "../../assets/Images/corner icon.png";
import macesblogo from "../../assets/Images/mace logo white.png";
import ieeestdlogo from "../../assets/Images/ieee students.png";
import ieeereglogo from "../../assets/Images/ieee region 10.png";
import ieeelogo from "../../assets/Images/ieee logo white.png";



function Sponsers() {
  return (
    <section id='sponsers'>
      <div className="content sponser-cont">
      <img src={icon} alt="memories" className='cornericon' />
        <h1>SPONSERS</h1>
        <div className="sp-card">
          <img src={macesblogo} alt="ieee-logo"/>
          <img src={ieeestdlogo} alt="ieee-logo" />
          <img src={ieeereglogo} alt="ieee-logo"/>
          <img src={ieeelogo} alt="ieee-logo"/>
        </div>
      </div>
    </section>
  )
}

export default Sponsers
