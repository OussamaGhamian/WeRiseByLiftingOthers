import React, { Component } from "react";

import Faq from "./Faq";

import "./Faqs.css";

class Faqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [],
      error: ""
    };
  }

  getFaqs = async () => {
    try {
      const response = await fetch("http://localhost:8080/faqs");
      const result = await response.json();
      if (result.success) {
        this.setState({ faqs: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  toggleFAQ = index => {
    const newFaqs = this.state.faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    });
    this.setState({
      faqs: newFaqs
    });
  };

  async componentDidMount() {
    this.getFaqs();
  }

  render() {
    return (
      <div className="freq">
        <h2>Frequent Asked Questions</h2>
        <div className="faqs">
          {this.state.faqs.map((faq, i) => (
            <Faq faq={faq} index={i} toggleFAQ={this.toggleFAQ} />
          ))}
        </div>
      </div>
    );
  }
}

export default Faqs;
