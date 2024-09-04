import React from "react";
import {Link, useNavigate} from "react-router-dom"; // Equivalent to Vue's router-link

import DarkModeButton from "../comprised/DarkModeButton";

import { useResponsive } from "../../hooks/useResponsive";
import logo from "../../assets/logo.png";
import {Button} from "react-bootstrap"; // Import the image directly
import './MainHeader.css';
function MainHeader() {
    // Use your custom hook to check if the screen is small
    const { isSmall } = useResponsive();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login");
    };

    const handleMenuToggle = () => {
        navigate("/login");
    };

    return (
        <header>
            <Link to="/">
                <img src={logo} alt="LiftLog Logo" className="logo" />
            </Link>

            <nav>
                {isSmall ? (
                    <>
                        <Button type="primary" onClick={handleMenuToggle}>
                            Account
                            <i className="mdi mdi-account" /> {/* Use a font icon class or another component for the icon */}
                        </Button>
                    </>
                ) : (
                    <>
                        <Link to="/workouts">Workout Log</Link>
                        <Link to="/progress">Progress</Link>
                        <Link to="/exercises">Exercises</Link>
                        <DarkModeButton />
                        <Button type="primary" onClick={handleClick}>
                            Account
                        </Button>
                    </>
                )}
            </nav>
        </header>
    );
}

export default MainHeader;
