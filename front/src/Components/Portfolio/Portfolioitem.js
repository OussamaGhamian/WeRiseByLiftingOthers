import React from 'react'
import DataImage from '../DataPortfolio/DataPortfolio'
import * as ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function Portfolioitem({ card, index }) {
    return (

        <div key={index}  >
            <ReactBootstrap.Nav.Link className=" topBotomBordersOut" >
                <Link to={`/Portfolio/${card.id}`} className="nav-link ">
                    <img className="portI" src={`http://localhost:8080/${card.image}`} />
                    <h1 style={{ color: "black" }}>{card.title}</h1>


                </Link>
            </ReactBootstrap.Nav.Link>
        </div>



    )
}
