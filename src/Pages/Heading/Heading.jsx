import React from 'react'

const heading = {
    fontFamily: "'Zen Dots', sans-serif",
    fontWeight: "regular",
    fontSize: "50px",
    lineHeight: "130px",
    color: "#1E1E1E",
    textTransform: 'uppercase',
    textAlign: "center",
  };

const Heading = ({ text }) => {
    return <h1 style={heading}>{text}</h1>;
  };

export default Heading
