import React, {useEffect, useRef, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {FaArrowDown} from "react-icons/fa";

import SplitHeaderItem from "./SplitHeaderItem";
import './SplitHeader.css';

const SplitHeader = ({schedules}) => {
    const [activeSchedule, setActiveSchedule] = useState(schedules[0]);
    const [splitDropdown, setSplitDropdown] = useState(false);
    const dropdownRef = useRef(null); // Reference to the dropdown

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setSplitDropdown(prevState => !prevState);
    };

    useEffect(() => {
        if (dropdownRef.current) {
            const dropdown = dropdownRef.current;
            if (splitDropdown) {
                dropdown.style.height = `${dropdown.scrollHeight}px`; // Set to content's full height
                dropdown.style.opacity = "1"; // Make visible
            } else {
                dropdown.style.height = "0px"; // Collapse height to 0
                dropdown.style.opacity = "0"; // Make invisible
            }
        }
    }, [splitDropdown]);

    return (
        <div>
            <div className="split-header-container">
                <Row>
                    <Col sm="12" md='auto'>
                        <h1>{activeSchedule.title}</h1>
                    </Col>
                    <Col sm="12" md='7'>

                    </Col>
                    <Col sm="12" md='auto'>
                        <Button
                            variant="outline-secondary"
                            onClick={toggleDropdown}
                        >
                            <FaArrowDown size={25}/>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className={`split-dropdown-container`}>
                <div ref={dropdownRef} className={`split-dropdown`}>
                    {schedules.slice(1).map((schedule, index) => (
                        <SplitHeaderItem
                            key={index}
                            schedule={schedule}
                            onClick={() => {
                                setActiveSchedule(schedule);
                                setSplitDropdown(false); // Close dropdown after selection
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SplitHeader;
