import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Home from "./pages/home/home"
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Services from './components/Services/Services'
import Faq from './components/Faqs/Faqs'
import HowItWork from './components/HowItWorks/HowItWorks'
import ContactUs from './components/ContactUs/ContactUs'
export default class App extends Component {
  render() {
    return (
      <>
        <Router>

          <Header />
          <Switch>

            <Route path='/Portfolio' exact component={Portfolio} />
            <Route path='/Portfolio/:id' render={props => <Portfolio {...props} />} /> {/*  this.props.match.params.id  */}


            <Route path='/HIT' component={HowItWork} />
            <Route path='/ContactUs' component={ContactUs} />
            <Route path='/Services' component={Services} />
            <Route path='/Faq' component={Faq} />
            <Route path='/' component={Home} />

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }

}


