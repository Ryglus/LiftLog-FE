import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import StorageService from "../../../../services/StorageService"; // Assuming you have this service for token management

const CreateExercise = ({workoutId, onExerciseCreated}) => {
    const [exerciseName, setExerciseName] = useState("");
    const [description, setDescription] = useState("");
    const [minReps, setMinReps] = useState(0);
    const [maxReps, setMaxReps] = useState(0);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                "http://localhost:8082/api/exercises",
                {
                    workout_id: workoutId, // Assuming you have the workoutId passed in as props
                    exercise_name: exerciseName,
                    description: description,
                    default_rep_range: {min: minReps, max: maxReps},
                },
                {
                    headers: {
                        Authorization: `Bearer ${StorageService.getAccessToken()}`,
                    },
                }
            );

            setMessage("Exercise created successfully!");
            setExerciseName("");
            setDescription("");
            setMinReps(0);
            setMaxReps(0);
            if (onExerciseCreated) {
                onExerciseCreated(response.data); // Call the callback function if defined
            }
        } catch (error) {
            setMessage(`Error creating exercise: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exerciseName">
                <Form.Label>Exercise Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter exercise name"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Enter exercise description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group controlId="minReps">
                        <Form.Label>Min Reps</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Min reps"
                            value={minReps}
                            onChange={(e) => setMinReps(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="maxReps">
                        <Form.Label>Max Reps</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Max reps"
                            value={maxReps}
                            onChange={(e) => setMaxReps(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit">
                Create Exercise
            </Button>

            {message && <p>{message}</p>}
        </Form>
    );
};

export default CreateExercise;
