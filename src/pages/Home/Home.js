import React, { Component } from 'react'
import './Home.scss'
import Hero from '../../Components/Hero/Hero'
import Service from '../../Components/Service'
import Slider from '../../Components/Slider'
import Promise from'../../Components/Promise'
import NotOterComp from '../../Components/Noc'
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