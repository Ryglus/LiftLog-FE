import SplitCalendarPicker from "./SplitCalendarPicker";
import React from "react";

import './SplitHeader.css'
import {Col, Row} from "react-bootstrap";

const SplitHeaderItem = ({schedule}) => {

    return (
        <Row className={"split-header-container"}>
            <Col xs={"auto"}>
                <h1>{schedule.title}</h1>
            </Col>
            <Col>
                <SplitCalendarPicker splitLength={schedule.split_interval} totalDays={schedule.split_interval}/>
            </Col>
        </Row>
    );
}

export default SplitHeaderItem;