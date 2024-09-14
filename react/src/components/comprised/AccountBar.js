import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../../contexts/AccountContext';
import './AccountBar.css';

const AccountBar = () => {
    const { account, logout } = useAccount();
    const navigate = useNavigate();

    return (
        <div className="account-navbar d-flex justify-content-end align-items-center">
            {account.isLoggedIn ? (
                <>
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
                </>
            ) : (
                <>
                    <Button variant="outline" onClick={() => navigate('/login')}>
                        Login
                    </Button>
                    <Button onClick={() => navigate('/register')}>Sign Up</Button>
                </>
            )}
        </div>
    );
};

export default AccountBar;
