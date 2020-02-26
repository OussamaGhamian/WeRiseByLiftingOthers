import React, { Component } from 'react'
import './Porfolio.css';
import DataImage from '../DataPortfolio/DataPortfolio'

import { Spring } from 'react-spring/renderprops'
import Portfolioitem from './Portfolioitem';
export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { portfolios: [], error: "" };
    }
    getPortfolio = async () => {
        try {
            const response = await fetch("http://localhost:8080/portfolio");
            const result = await response.json();
            if (result.success) {
                this.setState({ portfolios: result.result, error: "" });
            } else { this.setState({ error: result.message }); }
        } catch (err) { this.setState({ error: err }); }
    };
    async componentDidMount() {
        this.getPortfolio();
    }

    render() {
        return (
            <Spring
                from={{ opacity: 0, marginTop: - 1000 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ duration: 1000 }}
            >
                {
                    props =>
                        < div style={props} >
                            <div className="App">
                                <div className="fmDiv">
                                    {this.state.portfolios.map((card, i) => (

                                        <Portfolioitem card={card} index={i}/>


                                    ))}
                           
                                </div>

                            </div>
                        </div >
                }
            </Spring >

        )
    }
}
