import React from 'react';
import {Col, Row} from 'react-bootstrap';

import './AnalyticsHeroSection.css';
import SplitHeader from "./SplitComponents/SplitHeader";
import WorkoutHeader from "./WorkoutHeader";


const AnalyticsHeroSection = () => {
    /*
    TODO:   -schedule (split)
            -workout creator
            -intake tracking
            -workout tracking
     */
    /*
    TODO:     add todays workouts, nicely image it if avaible, ability to change the todays workouts,
            food intake field
            suplement intake field
     */
    return (
        <Row className="ps-md-5 m-1 p-2 hero-analytics-banner">
            <SplitHeader/>
            <WorkoutHeader/>
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
