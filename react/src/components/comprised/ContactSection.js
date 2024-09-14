import React from 'react';
import FrameworkSwitcher from "./FrameworkSwitcher";
import DarkModeButton from "./DarkModeButton";
import logo from "../../assets/logo.webp";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ContactSection.css';

const ContactSection = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    return (
        <div className="contact-section d-flex flex-column justify-content-between">
            <div
                className="d-flex justify-content-center align-items-center"
                onClick={() => navigate('/')} // Navigate to home when logo is clicked
                style={{ cursor: 'pointer' }} // Make the logo appear clickable
            >
                <img src={logo} className="logo" alt="Logo"/>
            </div>
            <div className="social-media d-flex flex-column align-items-center">
                <FrameworkSwitcher/>
            </div>
            <div className="social-media d-flex flex-column align-items-center">
                <DarkModeButton/>
            </div>
        </div>
    );
};

export default ContactSection;
