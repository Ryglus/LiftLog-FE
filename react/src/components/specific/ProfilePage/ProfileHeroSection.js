import {Col, Row} from "react-bootstrap";
import AvatarImageThumbnail from "./AvatarImageThumbnail";
import PillGroup from "../../shared/PillGroup";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useAccount} from "../../../contexts/AccountContext";
import {useNavigate, useParams} from "react-router-dom";
import {FaBirthdayCake, FaWeightHanging} from "react-icons/fa";

import './ProfileHeroSection.css'

import AvatarPop from "./AvatarPop";


const ProfileHeroSection = () => {
    const {account} = useAccount();
    const {id} = useParams(); // Get the `id` from the URL
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null); // State for fetched profile data
    const [loading, setLoading] = useState(true); // Loading state for fetching profile
    const isLocalUser = account.user?.username === id; // Check if the profile being viewed is the logged-in user's profile


    const weightPills = [
        {label: <div><FaBirthdayCake style={{marginBottom: '4px'}}/> 22</div>, variant: 'success'},
        {label: <div><FaWeightHanging style={{marginBottom: '4px'}}/> 71 Kg</div>, variant: 'info'}
    ];
    useEffect(() => {
        // If no id is provided in the URL, navigate to the logged-in user's profile
        if (!id) {
            if (account.user?.username) {
                navigate(`/profile/${account.user.username}`); // Redirect to the logged-in user's profile
            } else {
                navigate(`/`); // Redirect to homepage if not logged in
            }
        } else {
            // Fetch the profile for the provided `id`
            fetchProfile(id);
        }
    }, [id]);

    const fetchProfile = async (query) => {
        try {
            const response = await axios.get(`http://localhost:8081/api/profile`, {
                params: {query}
            });
            setProfileData(response.data[0]);
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    // Show loading or not-found state if necessary
    if (loading) return <div>Loading...</div>;
    if (!profileData) return <div>Profile not found</div>;
    return (
        <Row className="ps-md-5 m-1 p-2 hero-profile-banner">
            <Col md={7}>
                <Row>
                    <Col xs={5}>
                        <AvatarImageThumbnail path={profileData?.profile_image} canEdit={isLocalUser}/>
                    </Col>
                    <Col xs={7}>
                        <h1>{profileData?.full_name ? profileData.full_name : `${profileData?.username}`}</h1>
                        <p>@{profileData?.username}</p>
                        <PillGroup pills={weightPills}/>
                    </Col>
                    <p className="profile-bio" style={{padding: '10px'}}>{profileData?.bio}</p>
                </Row>

            </Col>
            <Col md={5}>
                <AvatarPop backgroundColor={'#191817'}/>
            </Col>
        </Row>


    )
}
export default ProfileHeroSection;