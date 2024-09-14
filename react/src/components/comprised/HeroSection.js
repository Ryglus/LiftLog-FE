import React from 'react';
import { Carousel, Button, Row, Col } from 'react-bootstrap';
import './HeroSection.css';
import bgImage1 from '../../assets/banners/bg1.webp'; // First background image
import bgImage2 from '../../assets/banners/bg2.webp'; // Second background image (carousel slide)
import bgImage3 from '../../assets/banners/bg3.webp'; // Third background image (carousel slide)

const HeroSection = () => {
    return (
        <Carousel interval={500000} pause="hover" className="hero-carousel">
            <Carousel.Item>
                <div className="hero-banner" style={{ backgroundImage: `url(${bgImage1})` }}>
                    <Row className="justify-content-center text-center">
                        <Col md={8}>
                            <h1 className="hero-title">Welcome to LiftLog</h1>
                            <p className="hero-subtitle">
                                Track your meals, log your workouts, and monitor your fitness progress effortlessly.
                            </p>
                            <Button size="lg" className="hero-btn">Get Started Today</Button>
                        </Col>
                    </Row>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="hero-banner" style={{ backgroundImage: `url(${bgImage2})` }}>
                    <Row className="justify-content-center text-center">
                        <Col md={8}>
                            <h1 className="hero-title">Achieve Your Fitness Goals</h1>
                            <p className="hero-subtitle">
                                Join LiftLog to stay on track and achieve the results you desire.
                            </p>
                            <Button size="lg" className="hero-btn">Join Now</Button>
                        </Col>
                    </Row>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="hero-banner" style={{ backgroundImage: `url(${bgImage3})` }}>
                    <Row className="justify-content-center text-center">
                        <Col md={8}>
                            <h1 className="hero-title">Track, Analyze, Improve</h1>
                            <p className="hero-subtitle">
                                With LiftLog, every workout and meal is one step closer to your goal.
                            </p>
                            <Button size="lg" className="hero-btn">Start Tracking</Button>
                        </Col>
                    </Row>
                </div>
            </Carousel.Item>

        </Carousel>
    );
};

export default HeroSection;
