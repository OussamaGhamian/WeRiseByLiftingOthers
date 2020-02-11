
import React from 'react'

function Card ({card}) {
	return (
        <div className="containar" key={Math.random}>
        <img className="card-image" src={`http://localhost:3000/images/${card.image}.jpg`} alt="" />
        <div className="card">
          <div className="card-title">
            {card.title}
          </div>
          <div className="card-descition">
            {card.descition}
          </div>
        </div>
      </div>
	)
}

export default Card;