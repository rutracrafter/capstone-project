import React from 'react'
import foodImg from './assets/restaurantfood.jpg';
import './Hero.css'

const Hero = () => {
  return (
    <div id="hero">
      <div id="hero-container">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut orci sit amet sapien gravida molestie vitae nec ligula. Pellentesque sed mi at ligula egestas viverra.</p>
          <a href="/booking">Reserve A Table</a>
        </div>
        <div>
          <img id="foodImg" src={foodImg} alt="some food on a plate" />
        </div>
      </div>
    </div>
  )
}

export default Hero