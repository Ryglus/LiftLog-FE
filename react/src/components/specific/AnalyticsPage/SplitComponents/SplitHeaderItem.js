import React from "react";

import './SplitHeader.css'
import {Col, Row} from "react-bootstrap";
import SplitCalendarPicker from "./SplitCalendarPicker";

const SplitHeaderItem = ({schedule, workouts}) => {

    return (
        <Row className={"split-header-container"}>
            <Col xs={"auto"}>
                <h1>{schedule.title}</h1>
            </Col>
            <Col>
                <div>
                    <SplitCalendarPicker
                        schedule={schedule}
                        totalDays={schedule.split_interval}
                        editable={false}
                        workouts={workouts}
                    />
                </div>
            </Col>
        </Row>
    );
}

export default SplitHeaderItem;