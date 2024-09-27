import React, {useState} from "react";
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import axios from "axios";
import StorageService from "../../../../services/StorageService"; // Assuming you have this service for token management
import './CreateSchedule.css'

const CreateSchedule = ({onScheduleCreated}) => {
    const [scheduleTitle, setScheduleTitle] = useState(""); // Schedule title
    const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]); // Default to today
    const [splitInterval, setSplitInterval] = useState(7); // Default split interval
    const [active, setActive] = useState(true); // Default to active
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // To track the submission state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true); // Start loading

        // Basic validation
        if (!scheduleTitle || !startDate || !splitInterval) {
            setMessage("Please provide a title, start date, and split interval.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.put(
                "http://localhost:8082/api/tracking/schedule", // Use PUT to create or update a schedule
                {
                    title: scheduleTitle,
                    start_date: startDate,
                    split_interval: splitInterval,
                    active: active,
                },
                {
                    headers: {
                        Authorization: `Bearer ${StorageService.getAccessToken()}`,
                    },
                }
            );

            setMessage("Schedule created successfully!");
            setScheduleTitle(""); // Reset the form
            setStartDate(new Date().toISOString().split("T")[0]); // Reset start date
            setSplitInterval(7); // Reset split interval
            setActive(true); // Reset active status

            // Call the callback function if provided to notify parent component
            if (onScheduleCreated) {
                onScheduleCreated(response.data);
            }
        } catch (error) {
            setMessage(`Error creating schedule: ${error.response?.data?.error || error.message}`);
        } finally {
            setLoading(false); // Stop loading after request
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="create-schedule-form">
            {/* Schedule Title */}
            <Form.Group controlId="scheduleTitle" className="mb-3">
                <Form.Label>Schedule Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter schedule title"
                    value={scheduleTitle}
                    onChange={(e) => setScheduleTitle(e.target.value)}
                    isInvalid={!scheduleTitle && message} // Show error if title is missing
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a schedule title.
                </Form.Control.Feedback>
            </Form.Group>

            {/* Start Date */}
            <Form.Group controlId="startDate" className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </Form.Group>

            {/* Split Interval */}
            <Form.Group controlId="splitInterval" className="mb-3">
                <Form.Label>Split Interval (Days)</Form.Label>
                <Form.Control
                    type="number"
                    value={splitInterval}
                    onChange={(e) => setSplitInterval(e.target.value)}
                    min="1" // Minimum of 1 day for a split interval
                />
            </Form.Group>

            {/* Active Status */}
            <Form.Group controlId="activeStatus" className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Active"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" disabled={loading} className="submit-btn">
                {loading ? (
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />{" "}
                        Creating Schedule...
                    </>
                ) : (
                    "Create Schedule"
                )}
            </Button>

            {/* Message and Feedback */}
            {message && (
                <Alert variant={message.includes("successfully") ? "success" : "danger"} className="mt-3">
                    {message}
                </Alert>
            )}
        </Form>
    );
};

export default CreateSchedule;
