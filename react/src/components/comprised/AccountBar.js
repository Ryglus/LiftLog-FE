import React from 'react';
import { Navbar, Nav, Button, Container, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa'; // Using react-icons for user icon
import './AccountBar.css';

const AccountBar = () => {
    return (
        <Navbar expand="lg" variant="dark" className="account-navbar">
            <Container>
                {/* Account Section on the Right */}
                <Nav className="ml-auto">
                    {/* Login Button */}
                    <Button variant="outline-light" className="login-btn">
                        Login
                    </Button>

                    {/* Sign Up Button */}
                    <Button variant="outline-light" className="sign-up-btn ml-2">
                        Sign Up
                    </Button>

                    {/* Account Settings Dropdown with Icons */}
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="outline-light" className="account-icon">
                            <FaUserCircle size={28} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#profile">
                                <FaUserCircle className="mr-2" /> Profile
                            </Dropdown.Item>
                            <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AccountBar;
