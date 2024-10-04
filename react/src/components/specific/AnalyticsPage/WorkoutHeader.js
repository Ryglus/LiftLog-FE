import { useTrackingContext } from "../../../contexts/TrackingContext";
import React from "react";
import './WorkoutHeader.css';
import ExerciseRow from "./ExerciseRow";
import CreateWorkout from "./SplitComponents/CreateWorkout";

const WorkoutHeader = () => {
    const { getTodaysWorkouts } = useTrackingContext();
    const theWorkout = getTodaysWorkouts();

    // Sample exercises for demo purpose
    const exercises = [
        {
            id: 1,
            workout_id: 1,
            exercise_name: 'Squats',
            description: 'Lower body exercise targeting the quads and glutes.',
            default_rep_range: { min: 8, max: 12 },
            image: '/images/squats.jpg',
        },
        {
            id: 2,
            workout_id: 1,
            exercise_name: 'Bench Press',
            description: 'Upper body exercise focusing on the chest.',
            default_rep_range: { min: 6, max: 10 },
            image: '/images/bench_press.jpg',
        },
    ];

    return (
        <div>
            {theWorkout && theWorkout.length > 0 ? (
                theWorkout.map((workout, index) => (
                    <div
                        className="workout-header-container"
                        style={{ backgroundColor: workout.color }}
                        key={index}
                    >
                        <div className="workout-header-content">
                            <span className="workout-header-title">{workout.workout_name}</span>
                            <span className="workout-header-title">Change Workout</span>
                            <span className="workout-header-title">Edit</span>
                            <ExerciseRow exercises={exercises} /> {/* Updated the spelling */}
                        </div>
                    </div>
                ))
            ) : (
                <div className="workout-header-container">
                    <CreateWorkout/>
                </div>
            )}
        </div>
    );
};

export default WorkoutHeader;
