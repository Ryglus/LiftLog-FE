import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import fitguy from './fitguy.webp';
import './Cards.css';
import { FaHeart, FaEllipsisH } from 'react-icons/fa';

const WorkoutHistoryCard = () => {
    return (
        <Card className="workout-card">
            {/* Top-right Ellipsis Icon */}
            <div className="ellipsis-icon">
                <FaEllipsisH />
            </div>

            {/* Image Section */}
            <div className="image-container">
                <Image className="card-img-top" src={fitguy} />
                <div className="title-overlay">
                    <div className="my-card-title">
                        WORKOUT HISTORY
                    </div>
                </div>
            </div>

            {/* Icons Section */}
            <div className="icon-section">
                <Row>
                    <Col className="text-center">
                        <FaHeart className="icon" />
                        <div className="icon-text">Like</div>
                    </Col>
                    <Col className="text-center">
                        <FaHeart className="icon" />
                        <div className="icon-text">Share</div>
                    </Col>
                    <Col className="text-center">
                        <FaHeart className="icon" />
                        <div className="icon-text">Save</div>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};

export default WorkoutHistoryCard;
