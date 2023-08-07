import React from 'react';
import Card from './Card';
import './Specials.css';
import GreekSalad from './assets/greeksalad.jpg';
import Bruchetta from './assets/bruchetta.svg';
import LemonDessert from './assets/lemondessert.jpg';

const Specials = () => {
  const cards = [
    {
      name: "Greek Salad",
      price: "$12.99",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut orci sit amet sapien gravida molestie vitae nec ligula. Pellentesque sed mi at ligula egestas viverra.",
      img: GreekSalad
    },
    {
      name: "Bruchetta",
      price: "$5.99",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut orci sit amet sapien gravida molestie vitae nec ligula. Pellentesque sed mi at ligula egestas viverra.",
      img: Bruchetta
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut orci sit amet sapien gravida molestie vitae nec ligula. Pellentesque sed mi at ligula egestas viverra.",
      img: LemonDessert
    },
  ]

  return (
    <div id="specials">
      <div id="specials-title">
        <h1>This weeks specials!</h1>
        <a href="/order-online">Online Menu</a>
      </div>
      <div id="specials-cards">
        {
          cards.map((card) => {
            return (<Card name={card.name} price={card.price} desc={card.desc} img={card.img} />)
          })
        }
      </div>
    </div>
  )
}

export default Specials