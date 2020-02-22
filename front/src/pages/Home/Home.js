import React, { Component } from 'react'
import './Home.scss'
import Hero from '../../Components/Hero/Hero'
import Service from '../../Components/Service'
import Slider from '../../Components/Slider'
import Promise from '../../Components/Promise'
import NotOterComp from '../../Components/Noc'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hero: [],
            heroErr: "",
            services: [],
            servicesErr: "",
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
            console.log(result.result)
            result.success ? this.setState({ services: result.result }) : this.setState({ heroErr: "Error in fetching coreSerives section" })
        }
        catch (err) {
            this.setState({ heroErr: err })
        }
    }
    componentDidMount() {
        this.getServices();
        this.getHero();
       
    }
    render() {
        return (
            <>

                {this.state.hero.map((item, index) => {
                    return <Hero key={index} name={item.name} image={item.image} slogan={item.slogan} btn={item.btn} />
                })}


                <section class="services_section">
                    <h1>Our Core Services</h1>
                    <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, placeat quasi quia
                        explicabo aut voluptatum accusamus adipisci perferendis
                    </article>

                    <section class="services">
                        {this.state.services.map((item, index) => {
                            const {title , description , image} = item
                            return <Service key={index} title={title}  description={description} image={image}/>
                        })}
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