import React, {useEffect, useState} from 'react';
import {FaHome} from 'react-icons/fa';
import logo from "../../../assets/logo.webp";
import {useNavigate} from 'react-router-dom';
import './ContactSection.css';
import {Col, Row} from "react-bootstrap";
import AccountBar from "./AccountBar";
import {useAccount} from "../../../contexts/AccountContext";

const ContactSection = () => {
    const { account } = useAccount();
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Track screen size
    // Handler for navigating to the home page
    const handleSectionClick = () => {
        navigate('/');
    };

    // Prevents navigation when clicking on the AccountBar
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    // Function to handle scroll event and toggle sticky class
    const handleScroll = () => {
        const header = document.querySelector('.contact-section');
        const stickyOffset = header.offsetTop + header.offsetHeight; // Detect once fully scrolled out
        if (window.pageYOffset > stickyOffset) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
// Detect screen size on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => window.removeEventListener('resize', handleResize); // Clean up event listener
    }, []);


    return (
        <Row className={`contact-section ${isSticky ? 'sticky-header' : ''}`} onClick={handleSectionClick}>
            {/* Home Icon */}
            <FaHome className="home-icon" />

            <Col xs={1} md={"auto"} className="d-flex justify-content-center">
                <img src={logo} className="logo" alt="Logo" />
            </Col>
            {/*TODO: bigger menu for when logged in, maybe fix align issue on sticky*/}
            {account.isLoggedIn ? (
                <Col xs={8} md={"auto"} className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="contact-title">LIFTLOG</h1>
                </Col>
            ):(
                <Col xs={8} md={"auto"} className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="contact-title">LIFTLOG</h1>
                </Col>
            )}


            <Col xs={2} md={"auto"} className="d-flex flex-column align-items-center justify-content-center justify-content-md-end">
                {/* The AccountBar itself is wrapped with stopPropagation */}
                <div className="account-bar-section" onClick={stopPropagation}>
                    <AccountBar vertical={!isSmallScreen && !isSticky}/>
                </div>
            </Col>
        </Row>
    );
};

export default ContactSection;
