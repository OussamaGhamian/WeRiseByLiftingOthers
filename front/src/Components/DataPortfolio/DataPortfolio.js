import React, { Component } from 'react'
import image1 from '../../images/download.png';
export default class dataImage extends Component {
    render() {
        return (
            <div className="App">

                {this.props.match.params.id}
                <h1> codi.tech </h1>
                <img src={image1} />
                <p> dasdsadasd sdasd</p>

            </div>
        )
    }
}
