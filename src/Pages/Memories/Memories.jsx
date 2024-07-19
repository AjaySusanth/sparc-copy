import React from 'react';
import './Memories.css';
import memories from "../../assets/Images/memories.png";
import icon from "../../assets/Images/corner icon.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Memories() {
  return (
    <>
     <section className='memories'>
     <img src={icon} alt="memories" className='cornericon' />
      
      <h1> memories</h1>
      
      <img src={memories} alt="memories" className='memoryimg' />
       <button>  <i class="bi bi-play-circle-fill"> </i>     Know More   </button>
     </section>
      

    </>
  )
}

export default Memories
