import React from 'react';
import {Button, ButtonGroup, Dropdown} from 'react-bootstrap';
import {FaCookieBite, FaSignInAlt} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {useAccount} from '../../../contexts/AccountContext';
import './AccountBar.css';
import AvatarImageThumbnail from "../ProfilePage/AvatarImageThumbnail";
import {FaChartColumn} from "react-icons/fa6";

const AccountBar = ({vertical = true}) => {
    const { account, logout } = useAccount();
    const navigate = useNavigate();


    const handleLogin = () => {
        navigate('/login');
    };

    const handleRouteClick = (route) => {
        navigate(route);
    };



    return (
        <div className="account-bar">
            {account.user ? (
                <ButtonGroup vertical={vertical} className='account-button-group'>
                    {/* Profile Button */}
                    <Button variant="outline-light" onClick={() => handleRouteClick('/profile')}>
                        <div style={{width: '40px'}}>
                            <AvatarImageThumbnail path={account.user?.profile_image} canEdit={false} border={false}/>
                        </div>

                    </Button>
                    <Button variant="outline-light" onClick={() => handleRouteClick('/tracking')}>
                        <div style={{width: '40px'}}>
                            <FaChartColumn size={'40px'}/>
                        </div>

                    </Button>
                    <Button variant="outline-light" onClick={() => handleRouteClick('/tracking')}>
                        <div style={{width: '40px'}}>
                            <FaCookieBite size={'40px'}/>
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
