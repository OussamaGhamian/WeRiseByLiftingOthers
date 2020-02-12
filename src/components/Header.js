import React    , { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../images/158149895785144590.png'
export default class Header extends Component {
    render() {
        return (
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootstrap.Navbar.Brand href="/Home" id = "slogan"><img src={logo} /></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                    <ReactBootstrap.Nav.Link ><Link to={'/Home'} className="nav-link">Home</Link> </ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link ><Link to={'/Portfolio'} className="nav-link">Portfolio</Link> </ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link ><Link to={'/HIT'} className="nav-link">How It Work</Link> </ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link ><Link to={'/ContactUs'} className="nav-link">Contact US</Link> </ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link ><Link to={'/Services'} className="nav-link">Services</Link> </ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link ><Link to={'/Faq'} className="nav-link">FAQ</Link> </ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
              
        )
    }
}