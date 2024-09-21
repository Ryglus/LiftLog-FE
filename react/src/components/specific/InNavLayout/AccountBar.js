import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup, Dropdown} from 'react-bootstrap';
import {FaSignInAlt} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {useAccount} from '../../../contexts/AccountContext';
import './AccountBar.css';
import AvatarImageThumbnail from "../ProfilePage/AvatarImageThumbnail";

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
                        <div style={{width: '40px'}}>
                            <AvatarImageThumbnail path={account.user?.profile_image} canEdit={false} border={false}/>
                        </div>

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
