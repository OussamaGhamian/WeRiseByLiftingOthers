import React, { Component } from 'react';
import './HowItWorks.css'
import Section from "../Section"

import { Spring } from 'react-spring/renderprops'
export default class HowItWorks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HowItWorks: [],
            HowItWorksErr: "",

        }

    }

    getHowItWorks = async () => {
        try {
            const response = await fetch('http://localhost:8080/howitworks')
            const result = await response.json()
            result.success ? this.setState({ HowItWorks: result.result }) : this.setState({ HowItWorksErr: "Error in fetching HowItWorks section" })
        }
        catch (err) {
            this.setState({ HowItWorksErr: err })
        }
    }

    componentDidMount() {
        this.getHowItWorks();
    }


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
                                <h2>Milestone</h2>
                                <div className="timeline">
                                    <ul>
                                        {this.state.HowItWorks.map((element, index) => {
                                            return < Section data={element} />
                                        })}
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