import React, { Component } from 'react';
import Header from './components/Header'
import Home from "./pages/home/home"
import Footer from './components/footer/Footer'
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    );
  }

}


