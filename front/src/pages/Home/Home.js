import React, { Component } from 'react'
import './Home.scss'
import Hero from '../../Components/Hero/Hero'
import Service from '../../Components/Service'
import Slider from '../../Components/Slider'
import Promise from '../../Components/Promise'
import NotOterComp from '../../Components/Noc'
import {Spring} from 'react-spring/renderprops'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hero: [],
            heroErr: "",
            services: [],
            servicesErr: "",
            testimonials: [],
            testimonialErr: "",
            promises: [],
            promisesErr: "",
            nocs: [],
            nocErr: "",
            experiences: [],
            experienceErr: ''
        }
    }
    getHero = async () => {
        try {
            const response = await fetch('http://localhost:8080/home/hero')
            const result = await response.json()
            result.success ? this.setState({ hero: result.result }) : this.setState({ heroErr: "Error in fetching hero section" })
        }
        catch (err) {
            this.setState({ heroErr: err })
        }
    }
    getServices = async () => {
        try {
            const response = await fetch('http://localhost:8080/core')
            const result = await response.json()
            result.success ? this.setState({ services: result.result }) : this.setState({ heroErr: "Error in fetching coreSerives section" })
        }
        catch (err) {
            this.setState({ heroErr: err })
        }
    }
    getSlides = async () => {
        try {
            const response = await fetch(`http://localhost:8080/testimonial`)
            const result = await response.json()
            result.success ? this.setState({ testimonials: result.result }) : this.setState({ testimonialErr: "Error in fetching testimonial section" })
        }
        catch (err) {
            this.setState({ testimonialErr: err })
        }
    }
    getPromises = async () => {
        try {
            const response = await fetch('http://localhost:8080/home/promise')
            const result = await response.json()
            result.success ? this.setState({ promises: result.result }) : this.setState({ promisesErr: "Error in fetching promises section" })
        }
        catch (err) {
            this.setState({ promisesErr: err })
        }
    }
    getNoc = async () => {
        try {
            const response = await fetch(`http://localhost:8080/notOtherCompany`)
            const result = await response.json()
            result.success ? this.setState({ nocs: result.result }) : this.setState({ nocErr: "Error in fetching notOtherCompany section" })
        }
        catch (err) {
            this.setState({ nocErr: err })
        }
    }
    getExperience = async () => {
        try {
            const response = await fetch(`http://localhost:8080/experience`)
            const result = await response.json()
            result.success ? this.setState({ experiences: result.result }) : this.setState({ experienceErr: "Error in fetching notOtherCompany section" })
        }
        catch (err) {
            this.setState({ experienceErr: err })
        }
    }
    componentDidMount() {
        this.getServices();
        this.getHero();
        this.getSlides();
        this.getPromises();
        this.getNoc();
        this.getExperience();
    }
    render() {
        return (
            <Spring
                from={{ opacity: 0, marginTop: -2000 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ duration: 1000 }}
            >
                {
                    props =>
                        <div style={props}>
                            <>
                                {this.state.hero.map((item, index) => {
                                    return <Hero key={index} name={item.name} image={item.image} slogan={item.slogan} btn={item.btn} />
                                })}
                                <section class="services_section">
                                    <h1>Our Core Services</h1>
                                    <article>
                                    Every line of code and every pixel we deliver is carefully crafted by our in-house team. While constantly looking for new horizons, challenges and opportunities in the programming field, we have focused our attention on these core areas:
                    </article>

                                    <section class="services">
                                        {this.state.services.map((item, index) => {
                                            const { title, description, image } = item
                                            return <Service key={index} title={title} description={description} image={image} />
                                        })}
                                    </section>
                                </section>


                                <section>
                                    <h1>Testimonials</h1>
                                    <div class="mySlides">
                                        <Slider slides={this.state.testimonials} />
                                    </div>
                                </section>

                                <section class="promises_section">
                                    <h1>Our promise</h1>
                                    <article>
                                        As part of our high quality service, we'd like to offer something extra too.
                    </article>
                                    <section class="promises">
                                        {this.state.promises.map((item, index) => {
                                            const { title, description } = item
                                            return <Promise key={index} title={title} description={description} />
                                        })}
                                    </section>
                                    <NotOterComp noc={this.state.nocs} exp={this.state.experiences} />
                                </section>
                            </>
                        </div>
                }
            </Spring>

        )
    }
}