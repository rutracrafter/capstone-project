import React from 'react'
import './About.css';
import owners1 from './assets/owners1.jpg';
import owners2 from './assets/owners2.jpg';

const About = () => {
  return (
    <div id="about">
      <div id="about-container">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut orci sit amet sapien gravida molestie vitae nec ligula. Pellentesque sed mi at ligula egestas viverra.</p>
        </div>
        <div id="images-container">
          <img id="owners-img-1" className="owner-imgs" src={owners1} alt="owners" />
          <img id="owners-img-2" className="owner-imgs" src={owners2} alt="owners" />
        </div>
      </div>
    </div>
  )
}

export default About