import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function BeastDetail(props) {
  return (

    <div className="beast-card" key={props.id}>
      {/* <p>{props.id}</p> */}
      <strong>{props.name}</strong>
      <p>{props.image}</p>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.habitat}</p>
      <Link to={`/beasts/${props.id}`}>read more  </Link>
    </div>
  )
}

export default BeastDetail;