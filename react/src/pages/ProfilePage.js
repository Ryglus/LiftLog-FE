import React from 'react';

import InNavLayout from "../layout/InNavLayout";
import ProfileSearch from "../components/specific/ProfilePage/ProfileSearch";
import UpdateProfile from "../components/specific/ProfilePage/UpdateProfile";
import {Container} from "react-bootstrap";
import AvatarPop from "../components/specific/ProfilePage/AvatarPop";

import './ProfilePage.css'
import WorkoutsChart from "../components/specific/ProfilePage/WorkoutsChart";

const ProfilePage = () => {
    return (
        <div>
            <InNavLayout style={{ marginTop: '10px' }}>
                <div className={"profile-banner"}>
                    <div>
                        <div className={"nameheader"}>
                            <h1>Here be thy name</h1>
                        </div>
                        <AvatarPop scale={0.2}/>
                    </div>
                </div>
                {/*
                 <WorkoutsChart/>
                */}

            </InNavLayout>
            <Container>

                <ProfileSearch/>
                <UpdateProfile/>
            </Container>
        </div>
    );
};

export default ProfilePage;
