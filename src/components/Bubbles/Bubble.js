import React from 'react';
import './Bubble.css';

function Bubble(props) {
  const dimensions = Math.floor(Math.random()*1000) + 'px';
  const colour = "rgba(220, 220, 250, 0.5)";
  const xCords = ""; // corresponds to css left
  const yCords = ""; // corresponds to css bottom

  return (
    // Find out how to give it the width and height from dimensions:
    <div className="bubble"></div>
  );
}

export default Bubble;
