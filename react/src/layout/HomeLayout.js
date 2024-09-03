import React from 'react';
import {Outlet} from 'react-router-dom';
import MainHeader from "../components/comprised/MainHeader";


const HomeLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet/>
        </>
    );
};

export default HomeLayout;