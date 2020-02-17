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

export default class Portfolio extends Component {
    constructor(props){
        super(props);

        this.state = {
            portfolio: [
                {
                    url: DataImage,
                    img: image1,
                    title: 'dsd'
                },
                {
                    url: DataImage,
                    img: image1,
                    title: 'dsd'
                },
                {
                    url: DataImage,
                    img: image1,
                    title: 'dsd'
                },
                {
                    url: DataImage,
                    img: image1,
                    title: 'dsd'
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <div className="fmDiv">
                        {
                            this.state.portfolio.map(item => {
                                return (
                                    <a href={item.url} target="_blank">
                                    <img className="portI" src={item.image} />
                                    <h1>{item.title}</h1>
                                </a>
                                )
                            })
                        }
                    
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
