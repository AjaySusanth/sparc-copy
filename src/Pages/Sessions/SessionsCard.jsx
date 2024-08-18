
/*import './Card.css';
import { HiChevronRight } from "react-icons/hi";
import icon from '../../assets/Images/right corner icon.png'

const Card = () => {
  return (
    <div className="card-container">
        <img src={icon} className='icon'/>
      <div className="card-content">
        <h2 className="card-title">Sample text</h2>
        <h2 className="card-subtitle">Session Name</h2>
      </div>

      <div className="card-footer">
      <button className="card-btn">
            <p className="btn-text">
                Know More
            </p>
            <HiChevronRight className="btn-icon" />
        </button>
      </div>


    </div>
  );
}

export default Card;*/
import './SessionsCard.css'
import Card from "../../components/Card"
import { HiChevronRight } from "react-icons/hi";
import styled from 'styled-components';
const ButtonContainer = styled.div`
 &::before{
    content: "";
    position: absolute;
    top: ${(props) => props.top}px; 
    left:  ${(props) => props.left}px; ; 
    width: 100px; 
    height: 130px; 
    background-image: url( ${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
 }

 @media (min-width:480px){
  &::before{
    left:${(props) => props.smLeft}px; ;
  }
 }
`
const SessionsCard = ({top,left,smLeft,img,handleMouseEnter,handleMouseLeave}) => {
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Card>
          <div className="card-content ">
              <h2 className="card-title">Sample text</h2>
              <h2 className="card-subtitle">Session Name</h2>
          </div>

          <div className="card-footer">
              <ButtonContainer top={top} left={left} smLeft={smLeft} img={img}>
                  <button className="card-btn">
                  <p className="btn-text">
                      Know More
                  </p>
                  <HiChevronRight className="btn-icon" />
                  </button>
              </ButtonContainer> 
          </div>
      </Card>
    </div>
  )
}
export default SessionsCard