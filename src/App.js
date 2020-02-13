import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Header'
import Home from "./pages/home/home"
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Services from './components/Services/Services'
import Faq from './components/Faqs/Faqs'
import HowItWork from './components/HowItWorks/HowItWorks'
import ContactUs from './components/ContactUs/ContactUs'
=======
import Header from './Components/Header'
import Home from "./pages/Home/Home"
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'
import Faq from './Components/Faqs/Faqs'
import HowItWork from './Components/HowItWorks/HowItWorks'
import ContactUs from './Components/ContactUs/ContactUs'
import OurTeam from './pages/OurTeam/OurTeam'
>>>>>>> 11c17e58bee5cb2e42ecc9c9fd18d926742693d6
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
            <Route path='/OurTeam' component={OurTeam} />
            <Route path='/' component={Home} />

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }

}


