import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InNavLayout from "../layout/InNavLayout";
import ProfileSearch from "../components/specific/ProfilePage/ProfileSearch";
import UpdateProfile from "../components/specific/ProfilePage/UpdateProfile";
import { Container } from "react-bootstrap";
import AvatarPop from "../components/specific/ProfilePage/AvatarPop";
import './ProfilePage.css';
import Footer from "../components/shared/Footer";
import { useAccount } from "../contexts/AccountContext";
import TabSectionLayout from "../layout/TabSectionLayout";
import defaultAvatar from '../assets/avatar.webp';

const ProfilePage = () => {
    const { account } = useAccount();
    const { id } = useParams(); // Get the `id` from the URL
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null); // State for fetched profile data
    const [loading, setLoading] = useState(true); // Loading state for fetching profile

    const sections = [
        { key: 'overview', title: 'Overview', content: <div>Exercise</div> },
        { key: 'details', title: 'Tracking & Analytics', content: <div>Exercise</div> },
        { key: 'settings', title: 'Community', content: <div>Exercise</div> },
    ];

    useEffect(() => {
        // If no id is provided in the URL, navigate to the logged-in user's profile
        if (!id) {
            if (account.user?.username) navigate(`/profile/${account.user.username}`); // Redirect to the logged-in user's profile
            else navigate(`/`);
        } else {
            // Fetch the profile for the provided `id`
            fetchProfile(id);
        }
    }, [id]);

    const fetchProfile = async (query) => {
        try {
            const response = await axios.get(`http://localhost:8081/api/search`,{
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
                <div className="profile-banner">
                    <div>
                        <div className="nameheader">
                            <img
                                className="avatar-image-header"
                                src={`http://localhost:8081/${profileData?.profile_image || defaultAvatar}`}
                                alt="Profile"
                                width="50"
                            />
                            <h1>{profileData?.username}</h1>

                        </div>
                        <ProfileSearch />
                        <AvatarPop scale={0.5} />
                    </div>
                </div>
            </InNavLayout>
            <TabSectionLayout sections={sections} />
            <Container>
                <UpdateProfile profileData={profileData} />
            </Container>
            <Footer />
        </div>
    );
};

export default ProfilePage;
