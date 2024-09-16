import React from 'react';
import { FaHome } from 'react-icons/fa';
import logo from "../../../assets/logo.webp";
import { useNavigate } from 'react-router-dom';
import './ContactSection.css';
import { Col, Row } from "react-bootstrap";
import AccountBar from "./AccountBar";

const ContactSection = () => {
    const navigate = useNavigate();

    // Handler for navigating to the home page
    const handleSectionClick = () => {
        navigate('/');
    };

    // Prevents navigation when clicking on the AccountBar
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <Row className="contact-section contact-section-overlay justify-content-center" onClick={handleSectionClick}>
            {/* Home Icon (hidden by default) */}
            <FaHome className="home-icon" />

            <Col xs={1} md={"auto"} className="d-flex justify-content-center">
                <img src={logo} className="logo" alt="Logo" />
            </Col>

            <Col xs={10} md={"auto"} className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="contact-title">LIFTLOG</h1>
            </Col>

            <Col xs={1} md={"auto"} className="d-flex flex-column align-items-center justify-content-center justify-content-md-end">
                {/* The AccountBar itself is wrapped with stopPropagation */}
                <div className="account-bar-section" onClick={stopPropagation}>
                    <AccountBar />
                </div>
            </Col>
        </Row>
    );
};

export default ContactSection;
