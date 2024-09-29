import {useTrackingContext} from "../../../contexts/TrackingContext";
import React from "react";
import './WorkoutHeader.css';
import ExcerciseRow from "./ExcerciseRow"; // Import an icon

const WorkoutHeader = () => {
    const {getTodaysWorkouts} = useTrackingContext();
    const theWorkout = getTodaysWorkouts();
    const exercises = [
        {
            id: 1,
            workout_id: 1,
            exercise_name: 'Squats',
            description: 'Lower body exercise targeting the quads and glutes.',
            default_rep_range: {min: 8, max: 12},
            image: '/images/squats.jpg',
        },
        {
            id: 2,
            workout_id: 1,
            exercise_name: 'Bench Press',
            description: 'Upper body exercise focusing on the chest.',
            default_rep_range: {min: 6, max: 10},
            image: '/images/bench_press.jpg',
        },
    ];
    return (
        <div>
            {theWorkout.map((workout, index) => (
                <div
                    className="workout-header-container"
                    style={{backgroundColor: workout.color}}
                    key={index}
                >
                    <div className="workout-header-content">
                        <span className="workout-header-title">{workout.workout_name}</span>
                        <span className="workout-header-title">change workout</span>
                        <span className="workout-header-title">edit</span>
                        <ExcerciseRow exercises={exercises}/>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default WorkoutHeader;
