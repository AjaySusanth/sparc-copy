import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import macelogo from '../../assets/Images/mace logo white.png';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.menu-btn')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set the active link on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false);
  };

  return (
    <nav>
      <ul className={`sidebar ${sidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
        <li className='hide-btn' onClick={() => setSidebarOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </li>
        <li><a href='#' className={activeSection === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>Home</a></li>
        <li><a href='#about' className={activeSection === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About</a></li>
        <li><a href='#timeline' className={activeSection === 'timeline' ? 'active' : ''} onClick={() => handleLinkClick('timeline')}>Timeline</a></li>
        <li><a href='#sessions' className={activeSection === 'sessions' ? 'active' : ''} onClick={() => handleLinkClick('sessions')}>Sessions</a></li>
        <li><a href='#sponsors' className={activeSection === 'sponsors' ? 'active' : ''} onClick={() => handleLinkClick('sponsors')}>Sponsors</a></li>
      </ul>
      
      <ul className='navbar'>
        <li><a href="#"><img src={macelogo} alt='logo' /></a></li>
        <div className="seprow">

        <li><a className={`hideOnMobile ${activeSection === 'home' ? 'active' : ''}`} href='#' onClick={() => handleLinkClick('home')}>Home</a></li>

        <li><a className={`hideOnMobile ${activeSection === 'about' ? 'active' : ''}`} href='#about'onClick={() => handleLinkClick('about')}>About</a></li>

        <li><a className={`hideOnMobile ${activeSection === 'timeline' ? 'active' : ''}`} href='#timeline' onClick={() => handleLinkClick('timeline')}>Timeline</a></li>

        <li><a className={`hideOnMobile ${activeSection === 'sessions' ? 'active' : ''}`} href='#sessions' onClick={() => handleLinkClick('sessions')}>Sessions</a></li>

        <li><a className={`hideOnMobile ${activeSection === 'sponsors' ? 'active' : ''}`} href='#sponsors' onClick={() => handleLinkClick('sponsors')}>Sponsors</a></li>
    
        </div>
        <li className='menu-btn hideOnMobile' onClick={() => setSidebarOpen(true)}>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
