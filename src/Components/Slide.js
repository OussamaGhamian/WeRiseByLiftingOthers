import React, { Component } from 'react'
import avatar from '../images/avatar.png'
export default class Slide extends Component {
    render() {
        return (
                <div className="mySlides">
                    <img src={avatar} alt="person" />
                    <section>
                        <h3>review1</h3>
                        <article>this is best agency I have worked with</article>
                    </section>
                </div>
        )
    }
}