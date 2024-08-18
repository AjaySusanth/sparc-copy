import './Card.css';

import icon from '../assets/Images/right corner icon.png'

const Card = ({children}) => {
  return (
    <div className="card-container">
        <img src={icon} className='icon'/>
        {children}
    </div>
  );
}

export default Card;