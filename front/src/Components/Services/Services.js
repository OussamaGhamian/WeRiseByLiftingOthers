import React, { Component } from "react";
import Card from "./Card";
import "./Services.css";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], error: "" };
  }
  getServices = async () => {
    try {
      const response = await fetch("http://localhost:8080/services");
      const result = await response.json();
      // console.log(result);
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
    this.showCards()
  }

  showCards = () => console.log(this.state.cards);

  render() {
    return (
      <div className="App">
        <div className="cards">
          {this.showCards()}
          {this.state.cards.map((card, i) => (
            <Card card={card} index={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
