import React from 'react';
import FrameworkSwitcher from "./FrameworkSwitcher";
import DarkModeButton from "./DarkModeButton";
import logo from "../../assets/logo.webp";

import './ContactSection.css'


const ContactSection = () => {
    return (
        <div className="contact-section d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
                <img src={logo} className="framework-icon" alt="Logo" />
            </div>
            <div className="social-media mt-4 d-flex flex-column align-items-center">

                <FrameworkSwitcher/>
                <div className="d-flex justify-content-center mt-3">
                    <DarkModeButton/>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

