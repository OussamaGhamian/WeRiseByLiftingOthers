import React, { Component } from 'react'
import "./Footer.css"
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import insta from '../../images/instagram.png'
export default class footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <section>
                        <h6>About us</h6>
                        <article>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ipsa.</article>
                    </section>
                    <section>
                        <h6>Quik Links</h6>
                        <ul>
                            <li><a href="/Home">Home</a></li>
                            <li><a href="/Portfolio">Portfolio</a></li>
                            <li><a href="/HIT">How it works</a></li>
                            <li><a href="/ContactUs">Contact Us</a></li>
                            <li><a href="/Services">Services</a></li>
                            <li><a href="/Faq">FAQ</a></li>
                        </ul>
                    </section>
                    <section>
                        <h6>Follow Us</h6>
                        <a href=""><img src={facebook} alt="facebook icon" /></a>
                        <a href=""><img src={insta} alt="instagram icon" /></a>
                        <a href=""><img src={twitter} alt="twitter icon" /></a>
                    </section>
                    <section>
                        <h6>Subscribe Newsletter</h6>
                        <div className="combine">
                            <input type="email" placeholder="Enter Email" />
                            <input type="button" value="Send" />
                        </div>
                    </section>
                </div>
                <hr />
                <p>Copyrights &#169; We rise by lifting others. All rights are reserved 2020, powered by <span>CODI</span></p>
            </footer>
        )
    }
}