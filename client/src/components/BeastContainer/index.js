import React from 'react';
import './style.css';

function BeastContainer(props) {
  return (
    <div className="beast-container">
      <h3>Beast-Container</h3>
      <p>Beasts</p>
      {props.children}
    </div>
  )
}

export default BeastContainer;