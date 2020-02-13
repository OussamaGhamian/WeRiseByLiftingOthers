
import React from 'react';
import pic1 from '../../images/pic1.jpg';


function Card ({card}) {
	return (
        <div className="containar" key={Math.random}>
        <img className="card-image"  src={pic1} alt="" />
        {/* src={`http://localhost:3001/${card.image}.jpg`} */ }
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