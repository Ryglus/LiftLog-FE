import React from 'react';
import FrameworkSwitcher from "../comprised/FrameworkSwitcher";
import DarkModeButton from "./DarkModeButton";
import logo from "../../assets/logo.webp";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Footer.css';
import {Col, Row} from "react-bootstrap";

const Footer = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    return (
        <Row className="footer-section justify-content-center mt-3 mb-1">
            <Col xs={1} className="d-flex justify-content-center"
                 onClick={() => navigate('/')}
                 style={{ cursor: 'pointer' }}>
                <div>
                    <img src={logo} className="logo" alt="Logo"/>
                </div>

            </Col>
            <Col xs={10} className="social-media d-flex flex-column align-items-center justify-content-center">
                <FrameworkSwitcher/>
            </Col>
            <Col xs={1} className="social-media d-flex align-items-center justify-content-end">
                <DarkModeButton/>
            </Col>
        </Row>
    );
};

export default Footer;
