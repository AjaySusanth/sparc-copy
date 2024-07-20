import React from 'react';
import PropTypes from 'prop-types';
import './RCornericon.css';
import icon from '../../assets/Images/corner icon.png'; 

function CornerIcon({ top, right, rotation }) {
  const style = {
    top,
    right,
    transform: `rotate(${rotation}deg)`,
    position: 'absolute',
  };

  return <img src={icon} alt="Corner img" className="cornericon" style={style} />;
}

CornerIcon.propTypes = {
  top: PropTypes.string,
  right: PropTypes.string, 
  rotation: PropTypes.number,
};

CornerIcon.defaultProps = {
  top: '-35px',
  right: '-50px', 
  rotation: 180,
};

export default CornerIcon;
