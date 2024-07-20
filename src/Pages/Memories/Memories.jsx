import React from 'react';
import './Memories.css';
import memories from "../../assets/Images/memories.png";
import icon from "../../assets/Images/corner icon.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cornericon from "../Cornericon/Cornericon";
function Memories() {
  return (
    <>
    
     <section className='memories'>
     <Cornericon  />
      
      <h1> memories</h1>
      
      <img src={memories} alt="memories" className='memoryimg' />
       <button>  <i class="bi bi-play-circle-fill"> </i>     Know More    </button>
     </section>
      
     
    </>
  )
}

export default Memories
