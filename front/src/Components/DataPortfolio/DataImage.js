import React from 'react'


export default function Portfolioitem({ card, index }) {
    return (

        <div key={index}>
            <h1 style={{ color: "black" }}>{card.title}</h1>
            <img className="portI" src={`http://localhost:8080/${card.image}`} />
            <p>{card.description}</p>




        </div>



    )
}
