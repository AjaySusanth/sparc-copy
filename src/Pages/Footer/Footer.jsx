import React from "react";
import "./Footer.css";
import Heading from "../Heading/Heading";

function AppFooter() {
  const Scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Main">
      <div className="connect">CONNECT US</div>
      <div className="name">
        <a href="tel:+1234567890" className="contact-link">
          <i className="bi bi-whatsapp"></i> ABC
        </a><a href="tel:+1234567890" className="contact-link">
          <i className="bi bi-whatsapp"></i> XYZ
        </a>
      </div>
      <div className="follow">
        FOLLOW US 
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-link">
        <i class="bi bi-twitter-x"></i>
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-link">
        <i class="bi bi-linkedin"></i>
        </a>
      </div>
      <div className="lastline">&copy; <span className="bold-text">SPARC</span> All Rights Reserved</div>
      <button className="scroll-to-top" onClick={Scroll}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="6 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>

      </button>
    </div>
  );
}

export default AppFooter;
