import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import './how it works.css'
import Section from "../Section"
export default class HowItWorks extends Component  {
    render() {
        return (
            <div className="App" >
                <div className="timeline">
                    <ul>
                        <Section />
                        <Section />
                        <Section />
                        <Section />
                        <Section />
                        <div style={{ clear: 'both' }}></div>
                    </ul>
                </div>

            </div>
        );
    }
}