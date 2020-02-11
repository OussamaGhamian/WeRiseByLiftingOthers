import React, { Component } from 'react'
import './home.scss'
import Hero from '../components/hero'
import Service from '../components/service'
import Slider from '../components/slider'
import Promise from'../components/promise'
import NotOterComp from '../components/NOC'
export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />

                <section class="services_section">
                    <h1>Our Core Services</h1>
                    <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, placeat quasi quia
                        explicabo aut voluptatum accusamus adipisci perferendis
                    </article>

                    <section class="services">
                        <Service /><Service /><Service /><Service /><Service /><Service />
                    </section>
                </section>


                <section>
                    <h1>Testimonials</h1>
                    <div class="mySlides">
                        <Slider />
                    </div>
                </section>

                <section class="promises_section">
                    <h1>Our promise</h1>
                    <article>
                        As part of our high quality service, we'd like to offer something extra too.
                    </article>
                    <section class="promises">
                        <Promise /><Promise /><Promise /><Promise /><Promise /><Promise />
                    </section>

                    <NotOterComp />
                </section>
            </>
        )
    }
}