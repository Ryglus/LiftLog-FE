import React, { useState } from 'react';
import AvatarPop from "../components/comprised/AvatarPop";
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProfileSearch from "../components/ProfileSearch";
import UpdateProfile from "../components/UpdateProfile";

const CtPage = () => {
    const [scale, setScale] = useState(0.7); // Default scale is 0.7

    const handleScaleChange = (e) => {
        setScale(e.target.value);
    };

    return (
        <Container>
          <ProfileSearch/>
            <UpdateProfile/>
        </Container>
    );
};

export default CtPage;
