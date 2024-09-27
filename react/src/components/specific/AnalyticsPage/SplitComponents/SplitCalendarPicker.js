import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import './SplitCalendarPicker.css';
import DragDropWorkout from './DragDropWorkout';
import {addDays, format, isToday, parseISO, startOfWeek} from 'date-fns';
import axios from "axios";
import StorageService from "../../../../services/StorageService";
import {FaArrowDown, FaTimes} from "react-icons/fa";

const SplitCalendarPicker = ({schedule, totalDays, startDate = new Date(), editable = false, workouts = []}) => {
    const [weekTiles, setWeekTiles] = useState([]); // Array to store tiles for the calendar
    const updatedAtDate = parseISO(schedule.updated_at); // Parse the updated_at date

    // Function to generate the week based on updated_at and split_interval
    const generateWeekTiles = () => {
        const startOfCurrentWeek = startOfWeek(updatedAtDate, {weekStartsOn: 1}); // Start from Monday
        const tiles = [];

        for (let i = 0; i < totalDays; i++) {
            const currentDay = addDays(startOfCurrentWeek, i);
            const formattedDate = format(currentDay, 'yyyy-MM-dd');

            // Determine if the day is disabled (beyond the split_interval)
            const isDisabled = i >= schedule.split_interval;

            // Find if there is a workout scheduled for this day
            const scheduledWorkouts = schedule.schedule_workouts.filter((sw) =>
                sw.days_of_split.includes(i % schedule.split_interval) // i % schedule.split_interval handles day indexes cycling within the split interval
            );

            // Get the corresponding workout details if scheduled
            const assignedWorkouts = scheduledWorkouts.map((scheduledWorkout) => {
                return workouts.find((workout) => workout.id === scheduledWorkout.workout_id);
            });

            // Push the tile with or without a scheduled workout
            tiles.push({
                date: formattedDate,
                dayIndex: i,
                assignedWorkouts,
                isDisabled,
            });
        }

        setWeekTiles(tiles);
    };

    const assignWorkoutToSchedule = async (wrkoutSchedule) => {
        try {
            let data2send = {
                schedule_id: wrkoutSchedule.schedule_id,
                workout_id: wrkoutSchedule.workout_id,
                days_of_split: wrkoutSchedule.days_of_split,
            };
            const response = await axios.put('http://localhost:8082/api/tracking/schedule/workouts', data2send, {
                headers: {
                    Authorization: `Bearer ${StorageService.getAccessToken()}`
                }
            });
            if (response.status === 200) {
                console.log('Workout assigned successfully');
            }
        } catch (error) {
            console.error('Error assigning workout to schedule:', error);
        }
    };

    const clearWorkoutsFromDay = (tile) => {
        // Keep track of the original schedule_workouts before clearing
        const originalScheduleWorkouts = JSON.parse(JSON.stringify(schedule.schedule_workouts));

        // Remove all workouts from that day (dayIndex) from schedule.schedule_workouts
        schedule.schedule_workouts.forEach(sw => {
            sw.days_of_split = sw.days_of_split.filter(dayIndex => dayIndex !== tile.dayIndex % schedule.split_interval);
        });

        // Filter out the workouts that are no longer assigned to any days
        schedule.schedule_workouts = schedule.schedule_workouts.filter(sw => sw.days_of_split.length > 0);

        schedule.schedule_workouts.forEach(e => {
            assignWorkoutToSchedule(e);
        })

        // Update the weekTiles state to reflect the cleared day
        setWeekTiles(prevTiles =>
            prevTiles.map(weekTile =>
                weekTile.dayIndex === tile.dayIndex ? {...weekTile, assignedWorkouts: []} : weekTile
            )
        );
        generateWeekTiles();
    };

    // Handle drag start
    const handleDragStart = (e, workout) => {
        e.dataTransfer.setData('workout', JSON.stringify(workout));
    };

    // Handle drop
    const handleDrop = (e, tile) => {
        const workout = JSON.parse(e.dataTransfer.getData('workout'));
        const dayIndex = tile.dayIndex % schedule.split_interval; // Calculate the correct day index within the split

        let scheduleWorkout = schedule.schedule_workouts.find(sw => sw.workout_id === workout.id);
        let changedWorkout = null;

        if (scheduleWorkout) {
            // If the workout is already scheduled, update the days_of_split array
            if (!scheduleWorkout.days_of_split.includes(dayIndex)) {
                scheduleWorkout.days_of_split.push(dayIndex);
                changedWorkout = scheduleWorkout; // Track the changed workout
            }
        } else {
            // If it's a new workout, add a new schedule_workout entry
            const newScheduleWorkout = {
                ID: Date.now(), // Temporary unique ID
                schedule_id: schedule.id,
                workout_id: workout.id,
                days_of_split: [dayIndex], // Add the new day to the days_of_split array
            };
            schedule.schedule_workouts.push(newScheduleWorkout);
            changedWorkout = newScheduleWorkout; // Track the new workout
        }

        // Log only the changed schedule_workouts
        if (changedWorkout) {
            assignWorkoutToSchedule(changedWorkout);
        }

        // Update the weekTiles state to reflect the dropped workout
        const updatedWeekTiles = weekTiles.map((weekTile) => {
            if (weekTile.dayIndex === tile.dayIndex) {
                return {
                    ...weekTile,
                    assignedWorkouts: [...weekTile.assignedWorkouts, workout], // Append the new workout
                };
            }
            return weekTile;
        });

        setWeekTiles(updatedWeekTiles); // Update the week tiles to reflect changes
        generateWeekTiles();
    };

    // UseEffect to trigger week generation based on schedule
    useEffect(() => {
        generateWeekTiles();
    }, [schedule, workouts]);

    return (
        <div>
            <Row className="calendar-row">
                {weekTiles.map((tile, index) => (
                    <Col key={index} className="calendar-col">
                        {isToday(tile.date) && (
                            <FaArrowDown className={"arrow-day-pointer"} size={20}/>
                        )}
                        <div
                            className={`day-tile ${tile.isDisabled ? 'disabled-day' : ''} ${isToday(tile.date) ? 'active-day' : ''}`} // Add 'disabled-day' class for styling
                            style={{
                                cursor: tile.isDisabled ? 'not-allowed' : 'pointer',
                                background: tile.assignedWorkouts?.length
                                    ? `linear-gradient(90deg, ${tile.assignedWorkouts
                                        .map(
                                            (workout, index) =>
                                                `${workout.color} ${(index / tile.assignedWorkouts.length) * 100}%, 
                              ${workout.color} ${((index + 1) / tile.assignedWorkouts.length) * 100}%`
                                        )
                                        .join(', ')})`
                                    : 'rgba(240,240,240,0.11)', // Default background if no workouts assigned
                            }}
                            onDragOver={(e) => !tile.isDisabled && e.preventDefault()} // Allow drag over only for non-disabled days
                            onDrop={(e) => !tile.isDisabled && handleDrop(e, tile)} // Handle drop for non-disabled days
                        >
                            <div className={"day-content"}>
                                <div className="day-number">{format(parseISO(tile.date), 'dd')}</div>
                                <small className="day-name">{format(parseISO(tile.date), 'EEE')}</small>
                                {!tile.isDisabled && editable && (
                                    <Button
                                        className="clear-button"
                                        onClick={() => clearWorkoutsFromDay(tile)}
                                    >
                                        <FaTimes size={12}/> {/* Add the FA icon inside the button */}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Col>

                ))}
            </Row>

            {editable && (
                <div className="workouts-section">
                    <h5>Available Workouts</h5>
                    <Row>
                        {workouts.map((workout) => (
                            <Col key={workout.id} className="workout-tile-container">
                                <DragDropWorkout
                                    workout={workout}
                                    onDragStart={(e) => handleDragStart(e, workout)}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
};

export default SplitCalendarPicker;
