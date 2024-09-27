import React, {useEffect, useRef, useState} from "react";
import {Button} from "react-bootstrap";
import {FaArrowDown} from "react-icons/fa";

import SplitHeaderItem from "./SplitHeaderItem";
import './SplitHeader.css';
import SplitCalendarPicker from "./SplitCalendarPicker";
import CreateSchedule from "./CreateSchedule";

const SplitHeader = ({schedules}) => {
    const [activeSchedule, setActiveSchedule] = useState(schedules.schedules[0]);
    const [splitDropdown, setSplitDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setSplitDropdown(prevState => !prevState);
    };

    useEffect(() => {
        if (dropdownRef.current) {
            const dropdown = dropdownRef.current;
            if (splitDropdown) {
                dropdown.style.height = `${dropdown.scrollHeight}px`;
                dropdown.style.opacity = "1";
            } else {
                dropdown.style.height = "0px";
                dropdown.style.opacity = "0";
            }
        }
    }, [splitDropdown]);

    return (
        <div>
            <div className="split-header-container">
                <div className="background-text">{activeSchedule.title.toUpperCase()}</div>
                <div className="split-header-content">
                    <div className="split-calendar">
                        <SplitCalendarPicker
                            schedule={activeSchedule}
                            totalDays={activeSchedule.split_interval}
                            editable={false}
                            workouts={schedules.workouts}
                        />
                    </div>
                    <div className="dropdown-col">
                        <Button
                            variant="outline-secondary"
                            onClick={toggleDropdown}
                            className="dropdown-button"
                        >
                            <FaArrowDown size={25}/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`split-dropdown-container`}>
                <div ref={dropdownRef} className={`split-dropdown`}>
                    {schedules.schedules.slice(1).map((schedule, index) => (
                        <SplitHeaderItem
                            key={index}
                            schedule={schedule}
                            onClick={() => {
                                setActiveSchedule(schedule);
                                setSplitDropdown(false);
                            }}
                        />
                    ))}
                    {schedules.schedules.length <= 1 && (
                        <div>
                            <p>No other schedule found. You can create one below.</p>
                            <CreateSchedule/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SplitHeader;
