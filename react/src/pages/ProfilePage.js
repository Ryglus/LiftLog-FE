import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InNavLayout from "../layout/InNavLayout";
import ProfileSearch from "../components/specific/ProfilePage/ProfileSearch";
import UpdateProfile from "../components/specific/ProfilePage/UpdateProfile";
import {Col, Row} from "react-bootstrap";
import AvatarPop from "../components/specific/ProfilePage/AvatarPop";
import './ProfilePage.css';
import Footer from "../components/shared/Footer";
import { useAccount } from "../contexts/AccountContext";
import TabSectionLayout from "../layout/TabSectionLayout";
import AvatarImageThumbnail from "../components/specific/ProfilePage/AvatarImageThumbnail";
import PublicProfileSection from "../components/specific/ProfilePage/PublicProfileSection";
import RecentWorkoutsSection from "../components/specific/ProfilePage/RecentWorkoutsSection";
import PillGroup from "../components/shared/PillGroup";
import {FaBirthdayCake, FaWeightHanging} from "react-icons/fa";
import AchievmentsCard from "../components/specific/ProfilePage/cards/AchievmentsCard";
import PlanTrackerCard from "../components/specific/ProfilePage/cards/PlanTrackerCard";

const ProfilePage = () => {
    const { account } = useAccount();
    const { id } = useParams(); // Get the `id` from the URL
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null); // State for fetched profile data
    const [loading, setLoading] = useState(true); // Loading state for fetching profile
    const isLocalUser = account.user?.username === id; // Check if the profile being viewed is the logged-in user's profile


    const weightPills = [
        { label: <div><FaBirthdayCake style={{ marginBottom: '4px' }} /> 22</div>, variant: 'success' },
        { label: <div><FaWeightHanging style={{ marginBottom: '4px' }} /> 71 Kg</div>, variant: 'info' }
    ];

    const sections = [
        { key: 'overview', title: 'Overview', content:  <Row>
                <Col md={3}>
                    <h1>Public profile</h1>
                    <PublicProfileSection/>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col sm={6} md={4}>
                            <RecentWorkoutsSection/>
                        </Col>
                        <Col sm={6} md={4}>
                            <AchievmentsCard/>
                        </Col>
                        <Col sm={6} md={4}>
                            <PlanTrackerCard/>
                        </Col>
                    </Row>

                </Col>
                <Col>

                </Col>
            </Row>
        },
        { key: 'update', title: 'Update', content: <UpdateProfile profileData={profileData} /> },
        { key: 'settings', title: 'Community', content: <div>Exercise</div> },
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
            const response = await axios.get(`http://localhost:8081/api/search`, {
                params: { query }
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
        <div>
            <InNavLayout style={{ marginTop: '10px' }}>
                <div className={"nameheader py-3 px-md-5 px-1"}>
                    <Row clasName="profile-banner ">
                        <Col sm={12} md={8} lg={6} xl={5}>
                            <Row>
                                <Col xs={5}>
                                    <AvatarImageThumbnail path={profileData?.profile_image} canEdit={isLocalUser}/>
                                </Col>
                                <Col xs={7}>
                                    <h1>{profileData?.full_name ? profileData.full_name : `${profileData?.username}`}</h1>
                                    <p>@{profileData?.username}</p>
                                    <PillGroup pills={weightPills} />
                                </Col>
                                <p className="profile-bio"
                                   style={{margin: '10px', padding: '10px'}}>{profileData?.bio}</p>
                            </Row>

                        </Col>
                        <Col xs={6} md={3}>

                        </Col>
                        <Col>
                            <AvatarPop path={profileData?.profile_image} scale={0.5}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <h1>Public profile</h1>
                            <PublicProfileSection/>
                        </Col>
                        <Col md={9}>
                            <Row>
                                <Col sm={6} md={4}>
                                    <RecentWorkoutsSection/>
                                </Col>
                                <Col sm={6} md={4}>
                                    <AchievmentsCard/>
                                </Col>
                                <Col sm={6} md={4}>
                                    <RecentWorkoutsSection/>
                                </Col>
                            </Row>

                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </div>

            </InNavLayout>

            <ProfileSearch/>
            {/* Conditionally render TabSectionLayout if it's the logged-in user's profile */}
            {isLocalUser && <TabSectionLayout style={{ marginTop: '20px' }} sections={sections}/>}

            <Footer />
        </div>
    );
};

export default ProfilePage;
