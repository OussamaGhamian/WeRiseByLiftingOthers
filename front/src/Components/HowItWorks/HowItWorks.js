import React, { Component } from 'react';
import './HowItWorks.css'
import Section from "../Section"
import {Spring} from 'react-spring/renderprops'
export default class HowItWorks extends Component {
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
                        </div>
                }
            </Spring>

        );
    }
}