import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './HomePage.css'; // Assuming you have custom styles

import MainNavBar from '../components/comprised/MainNavBar';
import AccountBar from '../components/comprised/AccountBar';

import ContactSection from "../components/comprised/ContactSection";
import FeatureSection from "../components/comprised/FeatureSection";
import HeroSection from "../components/comprised/HeroSection";
import TestimonialsSection from "../components/comprised/TestimonialsSection";
import CallToActionSection from "../components/comprised/CallToActionSection";

const HomePage = () => {
    return (
        <div>
            <Row style={{marginTop:'10px'}}>
                {/* Contact Section */}
                <Col md={2} lg={1} className={"contact-content"}>
                    <ContactSection/>
                </Col>

                {/* Main Section */}
                <Col md={10} lg={11} className="main-content">
                    {/* Navigation Bars */}
                    <Row className={"mb-3"}>
                        <Col md={8}>
                            <MainNavBar />
                        </Col>
                        <Col md={4} className="d-flex align-items-center justify-content-end">
                            <AccountBar />
                        </Col>
                    </Row>
                    <div >
                        <HeroSection/>
                    </div>

                </Col>
            </Row>
            <FeatureSection />
            <TestimonialsSection/>
            <CallToActionSection/>
        </div>
    );
};

export default HomePage;
