import React, {createContext, useContext, useEffect, useState} from 'react';
import {addDays, differenceInCalendarDays, format, parseISO, startOfDay} from 'date-fns';
import TrackingService from '../services/TrackingService';

const TrackingContext = createContext();

export const useTrackingContext = () => useContext(TrackingContext);

export const TrackingProvider = ({children}) => {
    const [trackingData, setTrackingData] = useState(null);

    // Compute active schedule and non-active schedules
    const activeSchedule = trackingData?.schedules?.find(schedule => schedule.active);
    const schedules = trackingData?.schedules?.filter(schedule => !schedule.active) || [];

    const getTodaysWorkouts = () => {
        // Access context to get activeSchedule and trackingData

        // Ensure activeSchedule and trackingData are available
        if (!activeSchedule || !trackingData) return [];

        // Get the current date and reset time to the start of the day
        const currentDate = startOfDay(new Date());

        // Parse and reset the schedule's start date to the beginning of the day
        const scheduleStartDate = startOfDay(parseISO(activeSchedule.start_date));

        // Calculate the day index from the schedule's start date to today
        const dayIndexFromScheduleStart = differenceInCalendarDays(currentDate, scheduleStartDate);

        // Find the workouts scheduled for today based on the schedule's split_interval
        const todaysWorkouts = activeSchedule.schedule_workouts?.filter(sw =>
            sw.days_of_split.includes(
                (dayIndexFromScheduleStart % activeSchedule.split_interval + activeSchedule.split_interval) % activeSchedule.split_interval
            )
        );

        // Map the workouts to include full workout details from trackingData
        const assignedWorkouts = todaysWorkouts?.map(sw =>
            trackingData.workouts.find(workout => workout.id === sw.workout_id)
        ) || [];

        return assignedWorkouts;
    };

    useEffect(() => {
        TrackingService.fetchTrackingData()
            .then(setTrackingData)
            .catch((error) => {
                console.error('Error fetching tracking data:', error);
            });
    }, []);

    const generateScheduleForDateRange = (schedule, dateRange) => {
        const {startDate, totalDays} = dateRange;
        const tiles = [];

        const scheduleStartDate = startOfDay(parseISO(schedule?.start_date));
        const startDay = startOfDay(new Date(startDate));

        let dayIndexFromScheduleStart = Math.floor((startDay - scheduleStartDate) / (1000 * 60 * 60 * 24));

        for (let i = 0; i < totalDays; i++) {
            const formattedDate = format(addDays(startDay, i), 'yyyy-MM-dd');

            const scheduledWorkouts = schedule?.schedule_workouts?.filter(sw =>
                sw.days_of_split.includes(dayIndexFromScheduleStart % schedule.split_interval)
            );

            const assignedWorkouts = scheduledWorkouts?.map(sw =>
                trackingData.workouts.find(workout => workout.id === sw.workout_id)
            ) || [];

            tiles.push({
                date: formattedDate,
                assignedWorkouts,
                isDisabled: i >= schedule?.split_interval
            });

            dayIndexFromScheduleStart++;
        }
        return tiles;
    };


    return (
        <TrackingContext.Provider
            value={{
                trackingData,
                activeSchedule,
                schedules,
                generateScheduleForDateRange, // Expose the generateScheduleForDateRange function
                getTodaysWorkouts,
            }}
        >
            {children}
        </TrackingContext.Provider>
    );
};
