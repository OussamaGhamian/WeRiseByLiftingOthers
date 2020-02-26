import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from "./pages/Home/Home"
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'
import Faq from './Components/Faqs/Faqs'
import HowItWork from './Components/HowItWorks/HowItWorks'
import ContactUs from './Components/ContactUs/ContactUs'
import OurTeam from './pages/OurTeam/OurTeam'
import FaqAdmin from "./pages/Admin/faqAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import PortfolioAdmin from "./pages/Admin/PorfolioAdmin";
import ServiceAdmin from "./pages/Admin/ServiceAdmin";
import HITAdmin from "./pages/Admin/HITAdmin";
import OurTeamAdmin from "./pages/Admin/OurTeamAdmin";
import ContactAdmin from './pages/Admin/ContactAdmin'
import DataImage from './Components/DataPortfolio/DataPortfolio'
import Admin from './pages/Admin/Admin'
export default class App extends Component {
  render() {
    return (
      <>
        <Router>

          <Header />
          <Switch>
            <Route path='/Portfolio' exact component={Portfolio} />
            <Route path='/Portfolio/:id' component={DataImage} /> {/*  this.props.match.params.id  */}
            <Route path='/HIT' component={HowItWork} />
            <Route path='/ContactUs' component={ContactUs} />
            <Route path='/Services' component={Services} />
            <Route path='/Faq' component={Faq} />
            <Route path='/OurTeam' component={OurTeam} />
            <Route path='/Admin' component = {Admin} />
            <Route path='/FaqAdmin' component = {FaqAdmin} />
            <Route path='/HomeAdmin' component = {HomeAdmin} />
            <Route path='/PortfolioAdmin' component = {PortfolioAdmin} />
            <Route path='/ServiceAdmin' component = {ServiceAdmin} />
            <Route path='/HITAdmin' component = {HITAdmin} />
            <Route path='/OurTeamAdmin' component = {OurTeamAdmin} />
            <Route path='/ContactAdmin' component = {ContactAdmin} />
            <Route path='/DataPortfolio' component={DataImage} />
            <Route path='/' component={Home} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }

}


