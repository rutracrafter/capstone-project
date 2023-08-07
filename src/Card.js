import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div id="card">
      <img id="card-img" src={props.img} alt={props.name} />
      <div id="card-title">
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
      </div>
      <p id="card-desc">{props.desc}</p>
      <a href="/order-online">Order a Delivery!</a>
    </div>
  )
}

export default Card