import React, { useState, useEffect } from 'react';
import './Hero.css';
import sparcLogo from '../../assets/Images/sparc logo.png';
import { IoIosArrowDown } from "react-icons/io";

function Hero() {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-09-28T08:00:00');
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleScrollToTicketSection = () => {
    const ticketSection = document.getElementById('ticket');
    if (ticketSection) {
      ticketSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAboutSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  return (
    <div className='hero-container'>
      <img src={sparcLogo} alt="SPARC" className='logo' />
      <h1 className='date'>
        S E P <span>2 8 | 2 9</span>
      </h1>
      <button className='register-button' onClick={handleScrollToTicketSection} >REGISTER NOW ↗ </button>
      <div className='countdown'>
        <div className='time'>
          <span>{String(timeLeft.days).padStart(2, '0')}</span>
          <p>Days</p>
        </div>
        <div className='time'>
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <p>Hours</p>
        </div>
        <div className='time'>
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <p>Minutes</p>
        </div>
        <div className='time'>
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <p>Seconds</p>
        </div>
      </div>
      <button className='scroll-button' onClick={handleScrollToAboutSection} >SCROLL TO EXPLORE <span><IoIosArrowDown /></span>  </button>
    </div>
  );
}

export default Hero;