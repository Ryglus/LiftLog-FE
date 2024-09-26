import React from 'react';
import './DragDropWorkout.css';

const DragDropWorkout = ({workout, onDragStart}) => {
    return (
        <div
            className="workout-tile"
        >
            <div
                draggable
                onDragStart={(e) => onDragStart(e, workout)}
                className="workout-color"
                style={{backgroundColor: workout.color}} // Workout color
            >
                {workout.workout_name}
            </div>
        </div>
    );
};

export default DragDropWorkout;
