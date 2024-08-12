import './Card.css';
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

export default Card;