import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import './Admin.css'
export default function Admin() {
  return (
    <div className="control">
      <ReactBootstrap.Button className='btn' ><a href="HomeAdmin">Home</a></ReactBootstrap.Button>
      <ReactBootstrap.Button className='btn'><a href="FaqAdmin">Frequent Asked Question</a></ReactBootstrap.Button>
      <ReactBootstrap.Button className='btn'><a href="ServiceAdmin">Services</a></ReactBootstrap.Button>
      <ReactBootstrap.Button className='btn'><a href="PortfolioAdmin">Portfolio</a></ReactBootstrap.Button>
      <ReactBootstrap.Button className='btn'><a href="HITAdmin">How It Works</a></ReactBootstrap.Button>
      <ReactBootstrap.Button className='btn'><a href="OurTeamAdmin">Our Team</a></ReactBootstrap.Button>
      <ReactBootstrap.Button className='btn'><a href="ContactAdmin">Contact Us</a></ReactBootstrap.Button>
    </div>
  )
}
