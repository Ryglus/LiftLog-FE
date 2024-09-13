import React from 'react';
import { Outlet } from 'react-router-dom';
import './HomeLayout.css';
import {Container} from "react-bootstrap";

const HomeLayout = () => {

    return (
        <Container xxl className={"custom-container"}>
            <Outlet />
        </Container>
    );
};

export default HomeLayout;
