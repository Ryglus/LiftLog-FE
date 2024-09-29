import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const AddLogModal = ({show, handleClose, exercise, onSaveLog}) => {
    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState(10);
    const [weight, setWeight] = useState(0);

    const handleSave = () => {
        const logData = {
            exerciseId: exercise.id,
            sets,
            reps,
            weight,
        };
        onSaveLog(logData); // Callback to pass the log data to parent
        handleClose(); // Close the modal after saving
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log {exercise.exercise_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Number of Sets */}
                    <Form.Group controlId="sets" className="mb-3">
                        <Form.Label>Sets</Form.Label>
                        <Form.Control
                            type="number"
                            min="1"
                            value={sets}
                            onChange={(e) => setSets(e.target.value)}
                        />
                    </Form.Group>

                    {/* Number of Reps */}
                    <Form.Group controlId="reps" className="mb-3">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control
                            type="number"
                            min="1"
                            value={reps}
                            onChange={(e) => setReps(e.target.value)}
                        />
                    </Form.Group>

                    {/* Weight */}
                    <Form.Group controlId="weight" className="mb-3">
                        <Form.Label>Weight (kg)</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            step="0.1"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Log
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddLogModal;
