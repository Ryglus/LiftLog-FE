import React, {useEffect, useState} from "react";
import axios from "axios";
import StorageService from "../../../services/StorageService";

const TestComponent = () => {
    const [userId, setUserId] = useState(""); // We can remove this since we get userId from JWT in the backend
    const [schedule, setSchedule] = useState(null); // Store the fetched schedule
    const [exerciseId, setExerciseId] = useState("");
    const [weight, setWeight] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [message, setMessage] = useState("");

    // Fetch schedule information on component mount
    useEffect(() => {
        fetchSchedule();
    }, []);

    // Fetch the user's schedule (GET /schedule)
    const fetchSchedule = async () => {
        try {
            const response = await axios.get("http://localhost:8082/api/tracking/schedule", {
                headers: {
                    'Authorization': `Bearer ${StorageService.getAccessToken()}`
                }
            })
            setSchedule(response.data); // Store the schedule in the state
            setMessage("Schedule fetched successfully!");
        } catch (error) {
            setMessage(`Error fetching schedule: ${error.response?.data?.error || error.message}`);
        }
    };

    // Create or update a schedule (PUT /schedule)
    const createOrUpdateSchedule = async () => {
        try {
            const response = await axios.put("http://localhost:8082/api/tracking/schedule", {
                start_date: new Date(), // Start today
                split_interval: 7, // Example: 7-day split
            }, {
                headers: {
                    'Authorization': `Bearer ${StorageService.getAccessToken()}`
                }
            })
            setSchedule(response.data); // Update the state with the new schedule
            setMessage("Schedule created/updated successfully!");
        } catch (error) {
            setMessage(`Error creating/updating schedule: ${error.response?.data?.error || error.message}`);
        }
    };

    // Log a workout (PUT /log-workout)
    const logWorkout = async () => {
        try {
            await axios.put("http://localhost:8082/api/log-workout", {
                exercise_id: exerciseId,
                weight: parseFloat(weight),
                sets: parseInt(sets, 10),
                reps: parseInt(reps, 10),
            }, {
                headers: {
                    'Authorization': `Bearer ${StorageService.getAccessToken()}`
                }
            })
            setMessage("Workout logged successfully!");
        } catch (error) {
            setMessage(`Error logging workout: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <div style={{padding: "20px"}}>
            <div>
                {schedule ? (
                    <div>
                        {console.log(schedule)}
                        <h1>Title: {schedule.title}</h1>
                        <p>Start Date: {schedule.start_date}</p>
                        <p>Split Interval: {schedule.split_interval} days</p>
                        <h3>Workouts:</h3>
                        {schedule.workouts && schedule.workouts.length > 0 ? (
                            schedule.workouts.map((workout) => (
                                <div key={workout.id}>
                                    <h4>Workout Name: {workout.workout_name}</h4>
                                    <p>Day of Split: {workout.day_of_split}</p>
                                    {workout.exercises.length > 0 ? (
                                        workout.exercises.map((exercise) => (
                                            <div key={exercise.id}>
                                                <p>Exercise: {exercise.exercise_name}</p>
                                                <p>Description: {exercise.description}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No exercises for this workout.</p>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p>No workouts found for this schedule.</p>
                        )}
                    </div>
                ) : (
                    <p>No schedule found. You can create one below.</p>
                )}
            </div>

            <div>
                <h2>Create/Update Schedule</h2>
                <button onClick={createOrUpdateSchedule}>Create/Update Schedule</button>
            </div>

            <div>
                <h2>Log Workout</h2>
                <input
                    type="text"
                    placeholder="Exercise ID"
                    value={exerciseId}
                    onChange={(e) => setExerciseId(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Sets"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                />
                <button onClick={logWorkout}>Log Workout</button>
            </div>

            {message && <div style={{marginTop: "20px", color: "green"}}>{message}</div>}
        </div>
    );
};

export default TestComponent;
