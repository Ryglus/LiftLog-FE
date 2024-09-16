import React from 'react';
import { Nav} from 'react-bootstrap';
import './MainNavBar.css';
import { FaStar, FaDollarSign, FaEnvelope } from 'react-icons/fa';

const MainNavBar = () => {
    return (
        <Nav className="ml-auto nav-links">
            <Nav.Link href="#features" className="nav-link">
                <FaStar className="nav-icon" />
                <span className="nav-text">Features</span>
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-link">
                <FaDollarSign className="nav-icon" />
                <span className="nav-text">Pricing</span>
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
                <FaEnvelope className="nav-icon" />
                <span className="nav-text">Contact</span>
            </Nav.Link>
        </Nav>
    );
};

export default MainNavBar;
