import React, { Component } from 'react'
import service from '../images/service.png'
export default class Service extends Component {
    render() {
        return (
            <div class="service">
                <img src={service} alt="serivceImage" />
                <h3>feature1</h3>
                <article>this is feature 1</article>
            </div>
        )
    }
}