import React, { Component } from 'react'
import DataImage from './DataImage'

export default class DataPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { portfolio: null, error: "" };
    }
    getPortfolio = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/portfolio/${id}`);
            const data = await response.json();
            if (data.success) {
                this.setState({ portfolio: data.result, error: "" });
            } else {
                this.setState({ error: data.message });
            }
        } catch (err) {
            this.setState({ error: err });
        }
    };
    async componentDidMount() {
        this.getPortfolio(this.props.match.params.id);
    }
    render() {
        return (

            <div >
                <div className="App">
                    <div className="fmDiv">
                        {this.state.portfolio !== null ?  <DataImage card={this.state.portfolio} /> : 'Loading...'}
                           
                    </div>

                </div>
            </div >


        )
    }
}
