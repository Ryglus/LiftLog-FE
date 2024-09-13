import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import './AccountBar.css';

const AccountBar = () => {

    const loggedIn = false; // Will be replaced by context in the future

    return (
        <div className="account-navbar d-flex justify-content-end align-items-center">
            {loggedIn ? (
                <>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="outline-light" className="account-icon">
                            <FaUserCircle size={28} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="custom-dropdown-menu">
                            <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </>
            ) : (
                <>
                    <Button variant="outline">
                        Login
                    </Button>
                    <Button>
                        Sign Up
                    </Button>
                </>
            )}
        </div>
    );
};

export default AccountBar;
