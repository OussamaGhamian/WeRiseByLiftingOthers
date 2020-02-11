import React, { useState } from 'react';
import Card from './Card';
import './cards.css';


function Cards() {
  const [cards] = useState([
    {
      id: 1,
      title: ' hardware issues.',
      descition: 'How many programmers does it take to screw in a lightbulb?',
      image: "pic1"

    },
    {
      id: 2,
      title: 'sfhdfdg Viewer.',
      descition: 'Who is the most awesome person?',
      image: "pic2"

    },
    {
      id: 3,
      title: 'This manydd d d d d d d d d d d d .',
      descition: 'How many questions does it take to make a successful FAQ Page?',
      image: "pic3"


    },
    {
      id: 4,
      title: 'hardware issues.',
      descition: 'How many programmers does it take to screw in a lightbulb?',
      image: "pic4"

    }
  ]);




  return (
    <div className="App">
      <div className="cards">
        {cards.map((card) => (
         <Card card={card } />
        ))}
      </div>
    </div>
  );
}

export default Cards
