import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import fitguy from './bellguy.webp';

import { FaHeart, FaEllipsisH } from 'react-icons/fa';

const WorkoutHistoryCard = () => {
    return (
        <Card className="workout-card">
            <div className="ellipsis-icon">
                <FaEllipsisH />
            </div>

            <div className="image-container">
                <Image className="card-img-top" src={fitguy} />
                <div className="title-overlay">
                    <div className="my-card-title" >
                        WORKOUT HISTORY
                    </div>
                </div>
            </div>

            <div className="icon-section">
                <Row>
                    <Col xs={4} className="text-center">
                        <FaHeart className="icon" />
                        <div className="icon-text d-md-none d-lg-block">Like</div>
                    </Col>
                    <Col xs={4} className="text-center">
                        <FaHeart className="icon" />
                        <div className="icon-text d-md-none d-lg-block">Share</div>
                    </Col>
                    <Col xs={4} className="text-center">
                        <FaHeart className="icon" />
                        <div className="icon-text d-md-none d-lg-block">Save</div>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};

export default WorkoutHistoryCard;
