import React from "react";
import "./Memories.css";
import memories from "../../assets/Images/memories.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import WhiteBg from "../WhiteBg/WhiteBg";
import Cornericon from '../RCornericon/RCornericon'
import Heading from "../Heading/Heading";
function Memories() {
  return (
    <>
      
      
      <WhiteBg height="auto"><div className="memories">
        <Cornericon />
       
       <Heading text=" MEMORIES" />

        <img src={memories} alt="memories" className="memoryimg" />
        <button>
          
          <i class="bi bi-play-circle-fill"> </i> Know More{" "}
        </button></div></WhiteBg>
      
    </>
  );
}

export default Memories;
