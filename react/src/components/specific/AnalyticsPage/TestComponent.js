import React, {useEffect, useState} from "react";
import axios from "axios";
import StorageService from "../../../services/StorageService";
import SplitHeader from "./SplitComponents/SplitHeader";

const TestComponent = () => {
    const [schedule, setSchedule] = useState(null); // Store the fetched schedule
    const [schedules, setSchedules] = useState(null); // Store the fetched schedule
    const [scheduleTitle, setScheduleTitle] = useState(""); // Title for creating/updating schedule
    const [startDate, setStartDate] = useState(""); // Start date for the schedule
    const [splitInterval, setSplitInterval] = useState(7); // Default split interval

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
                    Authorization: `Bearer ${StorageService.getAccessToken()}`
                }
            });
            setSchedules(response.data);
            setSchedule(response.data[0]); // Store the schedule in the state
            setScheduleTitle(response.data[0].title); // Set the schedule title from fetched data
            setSplitInterval(response.data[0].split_interval); // Set split interval
            setMessage("Schedule fetched successfully!");
        } catch (error) {
            setMessage(`Error fetching schedule: ${error.response?.data?.error || error.message}`);
        }
    };

    // Create or update a schedule (PUT /schedule)
    const createOrUpdateSchedule = async () => {
        try {
            const response = await axios.put(
                "http://localhost:8082/api/tracking/schedule",
                {
                    id: 1,
                    title: scheduleTitle,
                    start_date: new Date(startDate), // Format date as YYYY-MM-DD
                    split_interval: parseInt(splitInterval, 10),
                },
                {
                    headers: {
                        Authorization: `Bearer ${StorageService.getAccessToken()}`
                    }
                }
            );
            setSchedule(response.data); // Update the state with the new schedule
            setMessage("Schedule created/updated successfully!");
        } catch (error) {
            setMessage(`Error creating/updating schedule: ${error.response?.data?.error || error.message}`);
        }
    };

    // Log a workout (PUT /log-workout)
    const logWorkout = async () => {
        try {
            await axios.put(
                "http://localhost:8082/api/log-workout",
                {
                    exercise_id: exerciseId,
                    weight: parseFloat(weight),
                    sets: parseInt(sets, 10),
                    reps: parseInt(reps, 10),
                },
                {
                    headers: {
                        Authorization: `Bearer ${StorageService.getAccessToken()}`
                    }
                }
            );
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
                        <SplitHeader schedules={schedules}/>
                        <h3>Workouts:</h3>
                        {schedule.workouts && schedule.workouts.length > 0 ? (
                            schedule.workouts.map((workout, index) => (
                                <div key={workout.id}>
                                    <h4>Workout Name: {workout.workout_name}</h4>
                                    <p>Day: {index + 1}</p> {/* Index represents the day */}
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
                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        placeholder="Schedule Title"
                        value={scheduleTitle}
                        onChange={(e) => setScheduleTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Start Date: </label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Split Interval (days): </label>
                    <input
                        type="number"
                        placeholder="Split Interval"
                        value={splitInterval}
                        onChange={(e) => setSplitInterval(e.target.value)}
                    />
                </div>
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
