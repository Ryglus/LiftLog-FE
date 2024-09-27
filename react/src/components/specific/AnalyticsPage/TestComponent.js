import React, {useEffect, useState} from "react";
import axios from "axios";
import StorageService from "../../../services/StorageService";
import CreateWorkout from "./SplitComponents/CreateWorkout";
import CreateSchedule from "./SplitComponents/CreateSchedule";
import SplitHeader from "./SplitComponents/SplitHeader";

const TestComponent = () => {
    const [trackingData, setTrackingData] = useState(null); // Store the fetched schedule

    const [message, setMessage] = useState("");

    // Fetch schedule information on component mount
    useEffect(() => {
        fetchSchedule();
    }, []);

    // Fetch the user's schedule (GET /schedule)
    const fetchSchedule = async () => {
        try {
            const response = await axios.get("http://localhost:8082/api/tracking/overview", {
                headers: {
                    Authorization: `Bearer ${StorageService.getAccessToken()}`
                }
            });
            setTrackingData(response.data)
            setMessage("Schedule fetched successfully!");
        } catch (error) {
            setMessage(`Error fetching schedule: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <div style={{padding: "20px"}}>
            <div>
                {trackingData?.schedules.length ? (
                    <div>
                        <SplitHeader schedules={trackingData}/>

                        <CreateWorkout/>
                    </div>
                ) : (
                    <div>
                        <p>No schedule found. You can create one below.</p>
                        <CreateSchedule/>
                    </div>
                )}
            </div>

            {message && <div style={{marginTop: "20px", color: "green"}}>{message}</div>}
        </div>
    );
};

export default TestComponent;
