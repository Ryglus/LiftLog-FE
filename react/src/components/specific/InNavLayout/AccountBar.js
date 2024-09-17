import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap';
import {FaUserCircle, FaSignInAlt, FaSearchengin} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../../../contexts/AccountContext';
import './AccountBar.css';

const AccountBar = () => {
    const { account, logout } = useAccount();
    const navigate = useNavigate();
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Track screen size

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRouteClick = (route) => {
        navigate(route);
    };

    // Detect screen size on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => window.removeEventListener('resize', handleResize); // Clean up event listener
    }, []);

    return (
        <div className="account-bar">
            {account.user ? (
                <ButtonGroup vertical={!isSmallScreen}  className='account-button-group'>
                    {/* Profile Button */}
                    <Button variant="outline-light" onClick={() => handleRouteClick('/profile')}>
                        <FaUserCircle size={28} />
                    </Button>

                    {/* Dropdown with Settings and Logout */}
                    <Dropdown as={ButtonGroup} align="end">
                        <Dropdown.Toggle variant="outline-light">
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown-menu">
                            <Dropdown.Item onClick={() => handleRouteClick('/profile/settings')}>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            ) : (
                <Button variant="outline-light" className="login-button" onClick={handleLogin}>
                    <FaSignInAlt size={20} /> Login
                </Button>
            )}
        </div>
    );
};

export default AccountBar;
