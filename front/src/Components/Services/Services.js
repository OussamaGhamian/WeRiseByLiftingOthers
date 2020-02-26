import React, { Component } from "react";
import Card from "./Card";
import "./Services.css";
import { Spring } from "react-spring/renderprops";
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], error: "" };
  }
  getServices = async () => {
    try {
      const response = await fetch("http://localhost:8080/services");
      const result = await response.json();
      if (result.success) {
        this.setState({ cards: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  async componentDidMount() {
    this.getServices();
  }
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -1000 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 1500 }}
      >
        {props => (
          <div style={props}>
            <div className="ser">
              <h2> Our Services</h2>
              <div className="cards">
                {this.state.cards.map((card, i) => (
                  <Card card={card} index={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Services;
