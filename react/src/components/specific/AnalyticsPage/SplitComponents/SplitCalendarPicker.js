import React, {useState} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import './SplitCalendarPicker.css'; // Custom styles

// Helper function to get the start of the week (Monday)
const getWeekStart = (date) => {
    const day = date.getDay();
    const difference = (day === 0 ? 6 : day - 1);
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - difference);
    return weekStart;
};

// Helper function to generate days in a row
const generateDays = (start, length) => {
    const days = [];
    for (let i = 0; i < length; i++) {
        const newDate = new Date(start);
        newDate.setDate(start.getDate() + i);
        days.push(newDate);
    }
    return days;
};

// Short day names
const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const SplitCalendarPicker = ({splitLength = 4, totalDays = splitLength * 2 + 2}) => {
    const [selectedDays, setSelectedDays] = useState([]);

    const today = new Date();
    const weekStart = getWeekStart(today); // Get Monday of the current week
    const daysInRow = generateDays(weekStart, totalDays); // Generate days for the calendar

    // Function to check if a day is selected based on repeating logic
    const isDaySelected = (day) => {
        // Check if the day is selected based on the repeating split logic
        return selectedDays.some(selectedDate => {
            const selectedDay = new Date(selectedDate);
            const diffDays = Math.floor((day - selectedDay) / (1000 * 60 * 60 * 24));
            return diffDays % splitLength === 0;
        });
    };

    // Handle day selection
    const toggleDaySelection = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        if (selectedDays.includes(formattedDate)) {
            setSelectedDays(selectedDays.filter(day => day !== formattedDate));
        } else {
            setSelectedDays([...selectedDays, formattedDate]);
        }
    };

    // Render each day block
    return (
        <Row className="calendar-row">
            {daysInRow.map((day, index) => {
                const formattedDate = day.toISOString().split('T')[0];
                const isSelected = isDaySelected(day);
                const dayName = dayNames[day.getDay() === 0 ? 6 : day.getDay() - 1]; // Get the shortened day name

                // Disable days beyond the totalDays limit
                const isBeyondSplit = index >= splitLength;

                return (
                    <Col key={formattedDate} className="calendar-col">
                        <Button
                            variant={isSelected ? 'success' : 'outline-secondary'}
                            className="calendar-day"
                            onClick={() => toggleDaySelection(day)}
                            disabled={isBeyondSplit} // Disable if beyond splitLength
                        >
                            <div>{day.getDate()}</div>
                            {/* Date */}
                            <small>{dayName}</small> {/* Day Name */}
                        </Button>
                    </Col>
                );
            })}
        </Row>
    );
};

export default SplitCalendarPicker;
