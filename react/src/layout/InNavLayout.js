import React from 'react';
import { Col, Row } from "react-bootstrap";
import ContactSection from "../components/specific/InNavLayout/ContactSection";
import './inNavLayout.css'

const InNavLayout = ({ children, style }) => { // Use "children" instead of "Children"
    return (
        <Row style={{ ...style }}>
            <Col md={1} lg={1} className="contact-content">
                <ContactSection />
            </Col>

            <Col md={11} lg={11} className="main-content">
                {children}
            </Col>
        </Row>
    );
};

export default InNavLayout;
