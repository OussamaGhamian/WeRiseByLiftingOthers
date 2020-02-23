import React, { Component } from 'react'
import './Porfolio.css';
import image1 from '../../images/download.png'
import DataImage from "../DataPortfolio/DataPortfolio"
import {Spring} from 'react-spring/renderprops'
export default class Portfolio extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0, marginTop: -1000 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ duration: 1000 }}
            >
                {
                    props =>
                        <div style={props}>
                            <div className="App">
                                <div>
                                    <div className="fmDiv">
                                        <a href={DataImage} target="_blank">
                                            <img className="portI" src={image1} />
                                            <h1>knjknl</h1>

                                        </a>
                                        <a href={DataImage} target="_blank">
                                            <img className="portI" src={image1} />
                                            <h1>dsd</h1>
                                        </a>
                                    </div>
                                    <div className="fmDiv">
                                        <a href={DataImage} target="_blank">
                                            <img className="portI" src={image1} />
                                            <h1>dsd</h1>
                                        </a>
                                        <a href={DataImage} target="_blank">
                                            <img className="portI" src={image1} />
                                            <h1>dsd</h1>
                                        </a>

                                    </div>
                                    <div className="fmDiv">

                                        <a href={DataImage} target="_blank">
                                            <img className="portI" src={image1} alt="test" />
                                            <h1>dsd</h1>
                                        </a>
                                        <a href={DataImage} target="_blank">
                                            <img className="portI" src={image1} alt="test" />
                                            <h1>dsd</h1>
                                        </a>
                                    </div>
                                    <div className="fmDiv">
                                        <a href={DataImage} target="_blank">
                                            <img className="portI" src={image1} alt="test" />
                                            <h1>dsd</h1>
                                        </a>
                                        <a href={DataImage} target="_blank">
                                            <img className="portI" src={image1} alt="test" />
                                            <h1>dsd</h1>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                }
            </Spring>

        )
    }
}
