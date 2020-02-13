import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import './Porfolio.css';
import image1 from '../../images/download.png'
import DataImage from "../DataPortfolio/DataPortfolio"

export default class portfolio extends Component {
    render() {
        return (
            <div className="App">
                <div>
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
                            <img className="portI" src={image1} />
                            <h1>dsd</h1>
                        </a>
                        <a href={DataImage} target="_blank">
                            <img className="portI" src={image1} />
                            <h1>dsd</h1>
                        </a>
                        </div>
                    

                </div>
            </div>
        )
    }
}
