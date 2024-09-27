import React, {useState} from "react";
import {Alert, Button, Col, Form, Row, Spinner} from "react-bootstrap";
import axios from "axios";
import StorageService from "../../../../services/StorageService"; // Assuming you have this service for token management
import './CreateWorkout.css'

const CreateWorkout = ({scheduleId, onWorkoutCreated}) => {
    const [workoutName, setWorkoutName] = useState("");
    const [color, setColor] = useState("#000000"); // Default color
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // To track the submission state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true); // Start loading

        // Basic validation
        if (!workoutName || !color) {
            setMessage("Please provide both a workout name and color.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.put(
                "http://localhost:8082/api/tracking/workout",
                {
                    schedule_id: scheduleId, // Assuming you have the scheduleId passed in as props
                    color: color,
                    workout_name: workoutName,
                },
                {
                    headers: {
                        Authorization: `Bearer ${StorageService.getAccessToken()}`,
                    },
                }
            );

            setMessage("Workout created successfully!");
            setWorkoutName(""); // Reset the form
            setColor("#000000"); // Reset color picker

            // Call the callback function if provided to notify parent component
            if (onWorkoutCreated) {
                onWorkoutCreated(response.data);
            }
        } catch (error) {
            setMessage(`Error creating workout: ${error.response?.data?.error || error.message}`);
        } finally {
            setLoading(false); // Stop loading after request
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="create-workout-form">
            {/* Workout Name */}
            <Form.Group controlId="workoutName" className="mb-3">
                <Form.Label className="form-label">Workout Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter workout name"
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    className="input-field"
                    isInvalid={!workoutName && message} // Show error if workout name is missing
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a workout name.
                </Form.Control.Feedback>
            </Form.Group>

            {/* Workout Color */}
            <Form.Group controlId="workoutColor" className="mb-3">
                <Form.Label className="form-label">Workout Color</Form.Label>
                <Row>
                    <Col>
                        <Form.Control
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="color-picker"
                        />
                    </Col>
                </Row>
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
                        Creating Workout...
                    </>
                ) : (
                    "Create Workout"
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

export default CreateWorkout;
