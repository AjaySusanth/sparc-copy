import './Card.css';
import { HiChevronRight } from "react-icons/hi";
import Rcornericon from '../RCornericon/RCornericon'

const Card = () => {
  return (
    <div className="card-container">
        <Rcornericon/>
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