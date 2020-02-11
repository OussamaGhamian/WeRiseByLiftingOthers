import React, { Component } from 'react'
import sideImg from '../images/hero.jpg'
import Datum from './Datum'
export default class Noc extends Component {
    render() {
        return (
            <section class="not_other">
                <img src={sideImg} alt="sideImage" />
                <section>
                    <h3>We Are Not Just Another Coding Company.</h3>
                    <article>We are an ambitious bunch of creatives who simply want to make a difference with their work. Giving it
                      all we’ve got while genuinely having fun is the formula helping us face every challenge with a smile.
                    </article>
                    <p>Here is some information about htmlBurger in numbers:</p>
                    <Datum />
                    <Datum />
                    <Datum />
                </section>
            </section>
        )
    }
}