import React from 'react';
import { Outlet } from 'react-router-dom';
import {Container} from "react-bootstrap";

const HomeLayout = () => {

    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default HomeLayout;
