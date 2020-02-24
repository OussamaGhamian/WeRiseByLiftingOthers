import React from 'react'
import "./Hero.css"
export default function Hero(props) {
    return (
        <section class="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 132, 255, 0.5)) , url(http://localhost:8080/${props.image})` }}>
            <div class="hero-text">
                <h1>{props.name}</h1>
                <p>{props.slogan}</p>
                <a href="/ContactUs">
                    <button >{props.btn}</button>
                </a>
            </div>
        </section>
    )
}
