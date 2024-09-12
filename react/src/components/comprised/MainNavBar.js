import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './MainNavBar.css'; // For custom styling

const MainNavBar = () => {
    return (
        <Navbar expand="lg" variant="dark" className="main-navbar">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#features" className="nav-link">Features</Nav.Link>
                        <Nav.Link href="#pricing" className="nav-link">Pricing</Nav.Link>
                        <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavBar;
