import React from 'react';
import './style.css';

function BeastDetail(props) {
  return (
    <div className="beast-card" key={props.id}>
      <p>{props.id}</p>
      <strong>{props.name}</strong>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.habitat}</p>
    </div>
  )
}

export default BeastDetail;