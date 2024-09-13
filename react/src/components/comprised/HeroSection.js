import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

import './HeroSection.css';
import bgImage from "../../assets/banners/bg.webp";

const HeroSection = () => {
    return (
        <Row className="hero-banner justify-content-center text-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <Col md={8}>
                <h1 className="hero-title">Welcome to LiftLog</h1>
                <p className="hero-subtitle">
                    Track your meals, log your workouts, and monitor your fitness progress effortlessly.
                </p>
                <Button size="lg">Get Started Today</Button>
            </Col>
        </Row>
    );
};

export default HeroSection;
