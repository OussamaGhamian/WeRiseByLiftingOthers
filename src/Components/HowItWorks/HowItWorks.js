import React, { Component } from 'react';
import './HowItWorks.css'
import Section from "../Section"
export default class HowItWorks extends Component  {
    render() {
        return (
            <div className="HowItWorks" >
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