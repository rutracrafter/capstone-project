import React from 'react'
import './Testimonials.css';
import PersonCard from './PersonCard';

const Testimonials = () => {
  const people = [
    {
      rating: "8/10",
      name: "Jessica",
      text: "Awesome atmosphere and great service, will definitely be coming back here again!",
    },
    {
      rating: "10/10",
      name: "John",
      text: "My family and I love this place! We go every weekend!",
    },
    {
      rating: "7/10",
      name: "Daphne",
      text: "I am not huge on greek food, but even so, I enjoyed my food.",
    },
    {
      rating: "9/10",
      name: "Robin",
      text: "My kids love this place! My favourite dish is their greek salad! So refreshing!",
    },
  ]

  return (
    <div id="testimonials">
      <h1 id="testimonials-title">Testimonials</h1>
      <div id="people-cards">
        {
          people.map((person) => {
            return (<PersonCard rating={person.rating} name={person.name} text={person.text} />);
          })
        }
      </div>
    </div>
  )
}

export default Testimonials