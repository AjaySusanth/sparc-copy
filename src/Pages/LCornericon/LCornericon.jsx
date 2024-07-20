import React from 'react';
import PropTypes from 'prop-types';
import './LCornericon.css';
import icon from '../../assets/Images/corner icon.png'; 


function CornerIcon({ top, left, rotation }) {
  const style = {
    top,
    left,
    transform: `rotate(${rotation}deg)`,
    position: 'absolute',
  };

  return <img src={icon} alt="Corner img" className="cornericon" style={style} />;
}

CornerIcon.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  rotation: PropTypes.number,
};

CornerIcon.defaultProps = {
  top: '-35px',
  left: '-50px',
  rotation: 90,
};

export default CornerIcon;
