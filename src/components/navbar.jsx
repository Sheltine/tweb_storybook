import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'

class NavBar extends React.Component {
    render() {
        return(

            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">Github</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="#">
                        Pull Requests
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Issues
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        Marketplace
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        Explore
                    </NavItem>
                
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                    <Glyphicon glyph="bell"/>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    <Glyphicon glyph="plus"/>
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
export default NavBar