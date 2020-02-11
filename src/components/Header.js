import React    , { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
export default class Header extends Component {
    render() {
        return (
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootstrap.Navbar.Brand href="#home" id = "slogan">hands 4 Life</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                        <ReactBootstrap.Nav.Link href="#">Home</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#">Portfolio</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#deets">How it works</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link eventKey={2} href="#memes">Contact us</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        )
    }
}