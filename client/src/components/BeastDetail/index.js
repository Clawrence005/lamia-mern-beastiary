import React from 'react';

function BeastDetail(props) {
  return (
    <div key={props.id}>
      <p>{props.id}</p>
      <strong>{props.name}</strong>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.habitat}</p>
    </div>
  )
}

export default BeastDetail;