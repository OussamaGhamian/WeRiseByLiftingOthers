import React from 'react'
import "./Hero.css"
export default function Hero(props) {
    return (
        <section class="hero-image">
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
