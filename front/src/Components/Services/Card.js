import React from "react";

function Card({ card, index }) {
  {
    console.log(card);
  }
  return (
    <div className="containar" key={index}>
      <img
        className="card-image"
        src={`http://localhost:8080/${card.image}`}
        alt=""
      />

      <div className="card1">
        <div className="card-title">{card.title}</div>
        <div className="card-descition">{card.description}</div>
      </div>
    </div>
  );
}

export default Card;
