import {Col, Row} from "react-bootstrap";
import ProfileSectionCard from "./cards/ProfileSectionCard";
import eatguy from "./cards/eatguy.webp";
import {FaHeart} from "react-icons/fa";
import React from "react";


const RecentWorkoutsSection = () => {
    return (
        <Row>
            <Col sm={6} md={4}>
                <ProfileSectionCard title={"EAT"} img={eatguy} bottomRow={
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

            </Col>
            <Col sm={6} md={4}>

            </Col>
        </Row>
    );
}

export default RecentWorkoutsSection;