import React, { Component } from 'react'


import { render } from '@testing-library/react';
import './Porfolio.css';
import image1 from '../../images/download.png'
import DataImage from "../DataPortfolio/DataPortfolio"

export default class Portfolio extends Component {










    render() {
        return (
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
                            <img className="portI" src={image1} alt="test"/>
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
        )
    }
}
