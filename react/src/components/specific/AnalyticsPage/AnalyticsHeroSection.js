import React from 'react';
import {Col, Row} from 'react-bootstrap';

import './AnalyticsHeroSection.css';


const AnalyticsHeroSection = () => {
    /*
    TODO:   -schedule (split)
            -workout creator
            -intake tracking
            -workout tracking
     */
    return (
        <Row className="ps-md-5 m-1 p-2 hero-profile-banner">
            <Col md={7}>
                <Row>
                    <Col xs={5}>

                    </Col>
                    <Col xs={7}>


                    </Col>

                </Row>

            </Col>
            <Col md={5}>
            </Col>
        </Row>


    );
};

export default AnalyticsHeroSection;
