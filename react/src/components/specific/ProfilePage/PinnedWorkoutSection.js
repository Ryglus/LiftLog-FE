import {Col, Row} from "react-bootstrap";
import ProfileSectionCard from "./cards/ProfileSectionCard";
import {FaHeart} from "react-icons/fa";
import React from "react";
import fitguy from "./cards/trackbro.webp";
import trophyguy from "./cards/trophyguy.webp";
import bellguy from './cards/bellguy.webp';

const PinnedWorkoutsSection = () => {
    return (
        <Row>
            <Col sm={6} md={4}>
                <ProfileSectionCard title={"WORKOUT HISTORY"} img={bellguy} bottomRow={
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
                }/>
            </Col>
            <Col sm={6} md={4}>

                <ProfileSectionCard title={"ACHIEVMENTS"} img={trophyguy} bottomRow={
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
                }/>
            </Col>
            <Col sm={6} md={4}>
                <ProfileSectionCard title={"TRAINING PLAN"} img={fitguy} bottomRow={
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
                }/>
            </Col>
        </Row>
    );
}

export default PinnedWorkoutsSection;