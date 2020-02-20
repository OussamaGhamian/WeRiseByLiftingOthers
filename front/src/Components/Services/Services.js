import React,{Component} from 'react';
import Card from './Card';
import './Services.css';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], error: "" };
  }
  getServices= async () => {
    try {
      const response = await fetch("http://localhost:8080/services");
      const result = await response.json();
      
      if (result.success) {
        this.setState({ services: result.result, error: "" });
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
    <div div className="App">
      <div className="cards">
        {this.state.cards.map((card) => (
         <Card card={card } />
        ))}
      </div>
    </div>
  );
        }
}

export default Services;
