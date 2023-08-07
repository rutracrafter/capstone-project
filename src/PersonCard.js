import React from 'react'
import './PersonCard.css';

const PersonCard = (props) => {
  return (
    <div id="person-card">
      <h3>{props.rating}</h3>
      <h4>{props.name}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default PersonCard