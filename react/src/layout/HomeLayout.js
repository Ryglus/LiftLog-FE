import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from "../components/comprised/MainHeader";
import { useResponsive } from '../hooks/useResponsive'; // Import the hook
import './HomeLayout.css';

const HomeLayout = () => {
    const { isSmall } = useResponsive(); // Use the hook to get the screen size

    return (
        <div className={isSmall ? '' : 'main-container'}>
            <MainHeader />
            <Outlet />
        </div>
    );
};

export default HomeLayout;
