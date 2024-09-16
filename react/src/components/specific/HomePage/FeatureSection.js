import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import mealTrackingIcon from '../../../assets/icons/food.webp';  // Replace with generated image path
import workoutTrackingIcon from '../../../assets/icons/lift.webp';  // Replace with generated image path
import supplementTrackingIcon from '../../../assets/icons/pill.webp';  // Replace with generated image path
import './FeatureSection.css';

const FeatureSection = () => {
    return (
        <div className="feature-section">
            <Row className="justify-content-center">
                <Col md={4}>
                    <Card className="feature-card text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <span style={{width: '50%'}}>
                                <Card.Img variant="top" src={mealTrackingIcon} className="img-fluid" />
                            </span>

                        </div>


                        <Card.Body>
                            <Card.Title>Track Your Meals</Card.Title>
                            <Card.Text variant="bottom">
                                Log every meal and monitor your nutrition with ease.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="feature-card text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <span style={{width: '50%'}}><Card.Img variant="top" src={workoutTrackingIcon} className="img-fluid"/></span>
                        </div>
                        <Card.Body>
                            <Card.Title>Track Your Lifts</Card.Title>
                            <Card.Text variant="bottom">
                                Set your workout split and track progress in real-time.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="feature-card text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <span style={{width: '50%'}}><Card.Img variant="top" src={supplementTrackingIcon}
                                                                   className="img-fluid"/></span>
                        </div>
                        <Card.Body>
                            <Card.Title>Track Supplements</Card.Title>
                            <Card.Text variant="bottom">
                                Keep track of your daily supplements and stay consistent.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default FeatureSection;
