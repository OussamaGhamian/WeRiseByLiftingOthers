import React, { useState } from 'react';
import Card from './Card';
import './Services.css';


function Services() {
  const [cards] = useState([
    {
      id: 1,
      title: ' hardware issues.',
      descition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: "pic1"

    },
    {
      id: 2,
      title: 'sfhdfdg Viewer.',
      descition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: "pic2"

    },
    {
      id: 3,
      title: 'This manydd d d d  .',
      descition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: "pic3"


    },
    {
      id: 4,
      title: 'hardware issues.',
      descition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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

export default Services;
