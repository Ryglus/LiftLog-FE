import React from 'react';
import { Button, Dropdown} from 'react-bootstrap';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa'; // Import login icon
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../../../contexts/AccountContext';
import './AccountBar.css';

const AccountBar = () => {
    const { account, logout } = useAccount();
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="account-bar">
            {account.user ? (
                <Dropdown align="end">
                    <Dropdown.Toggle variant="outline-light" className="account-icon">
                        <FaUserCircle size={28} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="custom-dropdown-menu">
                        <Dropdown.Item href="#profile">
                            Profile ({account.user?.name || "User"})
                        </Dropdown.Item>
                        <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Button variant="outline-light" className="login-button" onClick={handleLogin}>
                    <FaSignInAlt size={20} /> Login
                </Button>
            )}
        </div>
    );
};

export default AccountBar;
