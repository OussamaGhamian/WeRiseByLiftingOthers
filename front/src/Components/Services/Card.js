
import React from 'react';
import pic1 from '../../images/pic1.jpg';


function Card ({card,index}) {
  {console.log(card)};
	return (
  
        <div className="containar" key={index}>
        <img className="card-image"  src={pic1} alt="" />
        {/* src={`http://localhost:3001/${card.image}.jpg`} */ }
        <div className="card1">
          <div className="card-title">
            {card.title}
          </div>
          <div className="card-descition">
            {card.description}
          </div>
          {console.log(card.descition)}
        </div>
      
      </div>
	)
}

export default Card;