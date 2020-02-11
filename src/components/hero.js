import React, { Component } from 'react'
import "./hero.css"
export default class Hero extends Component {
    render() {
        return (
            <section class="hero-image">
                <div class="hero-text">
                    <h1>We Rise By Lifting Others</h1>
                    <p>We serve our community by our creativity</p>
                    <button>Keep In Touch</button>
                </div>
            </section>
        )
    }
}