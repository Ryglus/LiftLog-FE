import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './HomePage.css'; // Assuming you have custom styles

import logo from '../assets/logo.webp';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import MainNavBar from "../components/comprised/MainNavBar";
import AccountBar from "../components/comprised/AccountBar";
import DarkModeButton from "../components/comprised/DarkModeButton";

const HomePage = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Row className="align-items-start">
                <Col md={3} style={{
                    minHeight: '80vh',
                    backgroundColor: '#151515',
                    position: 'relative',
                    borderRadius: '30px',
                    marginTop: '7%',
                    padding: '30px',
                    zIndex:'1',
                }}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={logo} className="img-fluid " style={{width: '70%'}} alt="Logo"/>
                    </div>
                    <div className="contact-info">
                        <h3 style={{color: '#fff', marginBottom: '30px'}}>Get in Touch</h3>
                        <p>Email: <strong>support@liftlog.com</strong></p>
                        <p>Phone: <strong>+1 234 567 890</strong></p>
                        <p>Address: <strong>123 LiftLog Lane, Fitness City, USA</strong></p>
                    </div>
                    <div className="social-media">
                        <h5 style={{color: '#fff', marginBottom: '15px'}}>Follow Us</h5>
                        <div style={{display: 'flex', gap: '20px'}}>
                            <a href="https://facebook.com" className="social-icon"
                               style={{fontSize: '24px', color: '#fff'}}>
                                <FaFacebookF/>
                            </a>
                            <a href="https://twitter.com" className="social-icon"
                               style={{fontSize: '24px', color: '#fff'}}>
                                <FaTwitter/>
                            </a>
                            <a href="https://instagram.com" className="social-icon"
                               style={{fontSize: '24px', color: '#fff'}}>
                                <FaInstagram/>
                            </a>
                            <a href="https://linkedin.com" className="social-icon"
                               style={{fontSize: '24px', color: '#fff'}}>
                                <FaLinkedin/>
                            </a>
                            <DarkModeButton></DarkModeButton>
                        </div>
                    </div>
                </Col>
                <Col
                    md={9}
                    className="red-column" // Move the margin logic to CSS
                    style={{
                        minHeight: '100vh',
                        backgroundColor: '#212121',
                        borderRadius: '30px',
                    }}
                >
                    <Row style={{padding:`10px`}}>
                        <Col md={"8"}>
                            <MainNavBar/>
                        </Col>
                        <Col md={"4"}>
                            <AccountBar/>
                        </Col>
                    </Row>
                    <Row>
                       <Button>asd</Button>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;
