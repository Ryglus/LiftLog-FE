import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import InNavLayout from "../layout/InNavLayout";
import ProfileSearch from "../components/specific/ProfilePage/ProfileSearch";
import UpdateProfile from "../components/specific/ProfilePage/UpdateProfile";
import {Col, Row} from "react-bootstrap";

import './ProfilePage.css';
import Footer from "../components/shared/Footer";
import {useAccount} from "../contexts/AccountContext";
import TabSectionLayout from "../layout/TabSectionLayout";

import PublicProfileSection from "../components/specific/ProfilePage/PublicProfileSection";
import RecentWorkoutsSection from "../components/specific/ProfilePage/RecentWorkoutsSection";

import AchievmentsCard from "../components/specific/ProfilePage/cards/AchievmentsCard";
import PlanTrackerCard from "../components/specific/ProfilePage/cards/PlanTrackerCard";

import ProfileHeroSection from "../components/specific/ProfilePage/ProfileHeroSection";

const ProfilePage = () => {
    const { account } = useAccount();
    const { id } = useParams(); // Get the `id` from the URL
    const [profileData] = useState(null); // State for fetched profile data

    const isLocalUser = account.user?.username === id; // Check if the profile being viewed is the logged-in user's profile


    const sections = [
        { key: 'overview', title: 'Overview', content:  <Row>
                <Col md={3}>
                    <h1>Public profile</h1>
                    <PublicProfileSection/>
                </Col>
                <Col md={12} lg={9}>
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
                    <h1 className={"mt-2"}>Recent activity</h1>
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
        {key: 'settings', title: 'Community', content: <div style={{height: '1000px'}}>Exercise</div>},
    ];



    return (
        <div>
            <InNavLayout style={{ marginTop: '10px' }}>
                <ProfileHeroSection/>
            </InNavLayout>

            <ProfileSearch/>

            {/**/}
            {/* Conditionally render TabSectionLayout if it's the logged-in user's profile */}
            {isLocalUser && <TabSectionLayout style={{ marginTop: '20px' }} sections={sections}/>}

            <Footer />
        </div>
    );
};

export default ProfilePage;
