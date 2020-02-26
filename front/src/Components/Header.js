import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops'
import logo from '../images/158149895785144590.png'
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0, marginRight: -2000 }}
                to={{ opacity: 1, marginRight: 0 }}
                config={{ delay: 700, duration: 1500 }}
            >
                {
                    props =>
                        <div style={props}>
                            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                <ReactBootstrap.Navbar.Brand href="/Home" id="slogan"><img src={logo} alt="logo" /></ReactBootstrap.Navbar.Brand>
                                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                                    <ReactBootstrap.Nav className="mr-auto">
                                        <ReactBootstrap.Nav.Link className=" topBotomBordersOut" ><Link to={'/Home'} className="nav-link ">Home</Link> </ReactBootstrap.Nav.Link>
                                        <ReactBootstrap.Nav.Link className=" topBotomBordersOut"><Link to={'/Portfolio'} className="nav-link">Portfolio</Link> </ReactBootstrap.Nav.Link>
                                        <ReactBootstrap.Nav.Link className=" topBotomBordersOut"><Link to={'/Services'} className="nav-link">Services</Link> </ReactBootstrap.Nav.Link>
                                        <ReactBootstrap.Nav.Link className=" topBotomBordersOut"><Link to={'/HIT'} className="nav-link">How It Work</Link> </ReactBootstrap.Nav.Link>
                                        <ReactBootstrap.Nav.Link className=" topBotomBordersOut"><Link to={'/Faq'} className="nav-link">FAQ</Link> </ReactBootstrap.Nav.Link>
                                        <ReactBootstrap.Nav.Link className=" topBotomBordersOut"><Link to={'/OurTeam'} className="nav-link">Our Team</Link> </ReactBootstrap.Nav.Link>
                                        <ReactBootstrap.Nav.Link className=" topBotomBordersOut" ><Link to={'/ContactUs'} className="nav-link">Contact US</Link> </ReactBootstrap.Nav.Link>
                                        {/* <ReactBootstrap.Nav.Link className=" topBotomBordersOut" ><Link to={'/Admins'} className="nav-link">Admin</Link> </ReactBootstrap.Nav.Link> */}
                                    </ReactBootstrap.Nav>
                                </ReactBootstrap.Navbar.Collapse>
                            </ReactBootstrap.Navbar>
                        </div>
                }
            </Spring>
        )
    }
}