import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {FaPlus, FaTimes} from 'react-icons/fa';
import './ExerciseRow.css';
import AddLogModal from './AddLogModal';

const ExerciseRow = ({exercises, onAddExercise, onRemoveExercise}) => {
    const [showLogModal, setShowLogModal] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);

    // Function to open log modal
    const handleLogExercise = (exercise) => {
        setSelectedExercise(exercise);
        setShowLogModal(true);
    };

    // Function to handle saving a log
    const handleSaveLog = (logData) => {
        console.log('Saved Log Data:', logData);
        // You can now save the log data to your backend or state
    };

    return (
        <div className="exercise-row-container">
            <div className="exercise-row-scrollable">
                {exercises.map((exercise, index) => (
                    <div key={index} className="exercise-col">
                        <div className="exercise-item">
                            <div className="exercise-image-container">
                                <img
                                    src={exercise.image}
                                    alt={exercise.exercise_name}
                                    className="exercise-image"
                                />
                            </div>
                            <div className="exercise-details">
                                <span className="exercise-name">
                                    {exercise.exercise_name}
                                </span>
                                <span className="exercise-description">
                                    {exercise.description}
                                </span>
                                {exercise.default_rep_range && (
                                    <span className="exercise-reps">
                                        Rep Range: {exercise.default_rep_range.min} - {exercise.default_rep_range.max}
                                    </span>
                                )}
                            </div>
                            <div className="exercise-action">
                                <Button
                                    variant="success"
                                    size="sm"
                                    onClick={() => handleLogExercise(exercise)}
                                >
                                    Log Exercise
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => onRemoveExercise(index)}
                                >
                                    <FaTimes/>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add New Exercise Column */}
                <div className="exercise-col add-exercise-col">
                    <div className="exercise-item">
                        <div className="exercise-image-container add-exercise-icon">
                            <FaPlus/>
                        </div>
                        <div className="exercise-details">
                            <Button
                                variant="outline-primary"
                                className="add-exercise-button"
                                onClick={onAddExercise}
                            >
                                Add New Exercise
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Log Modal */}
            {selectedExercise && (
                <AddLogModal
                    show={showLogModal}
                    handleClose={() => setShowLogModal(false)}
                    exercise={selectedExercise}
                    onSaveLog={handleSaveLog}
                />
            )}
        </div>
    );
};

export default ExerciseRow;
