import React from 'react';
import {useTheme} from '../../contexts/ThemeContext';
import {Button} from 'react-bootstrap';
import {FaSun, FaMoon} from 'react-icons/fa';

const DarkModeButton = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon/> : <FaSun/>}
        </Button>
    );
};

export default DarkModeButton;