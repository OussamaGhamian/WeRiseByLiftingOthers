import React, { Component } from 'react';
import Header from './components/header'
import Home from "./pages/home"
import Footer from './components/footer'
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


