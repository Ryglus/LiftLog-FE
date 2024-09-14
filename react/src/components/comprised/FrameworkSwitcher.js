import React, { useState, useEffect } from 'react';
import vueLogo from '../../assets/frameworks/Vue-icon.svg';
import angularLogo from '../../assets/frameworks/Angular-icon.svg';
import reactLogo from '../../assets/frameworks/React-icon.svg';
import './FrameworkSwitcher.css';

const FrameworkSwitcher = () => {
    const [activeFramework, setActiveFramework] = useState('');

    const handleSwitchFramework = (framework, port) => {
        window.location.assign(`http://localhost:${port}`);
    };

    useEffect(() => {
        const currentPort = window.location.port;
        switch (currentPort) {
            case '3001':
                setActiveFramework('react');
                break;
            case '3002':
                setActiveFramework('angular');
                break;
            case '3003':
                setActiveFramework('vue');
                break;
            default:
                setActiveFramework('');
        }
    }, []);

    return (
        <div className="d-flex social-icons">
            <img
                onClick={() => handleSwitchFramework('vue', 3003)}
                className={`framework-icon ${activeFramework === 'vue' ? 'active' : ''}`}
                role="button"
                aria-label="Switch to Vue framework"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleSwitchFramework('vue', 3003)}
                 src={vueLogo} alt="Vue"/>

                <img onClick={() => handleSwitchFramework('angular', 3002)}
                     className={`framework-icon ${activeFramework === 'angular' ? 'active' : ''}`}
                     role="button"
                     aria-label="Switch to Angular framework"
                     tabIndex={0}
                     onKeyDown={(e) => e.key === 'Enter' && handleSwitchFramework('angular', 3002)} src={angularLogo} alt="Angular"/>

            <img
                onClick={() => handleSwitchFramework('react', 3001)}
                className={`framework-icon ${activeFramework === 'react' ? 'active' : ''}`}
                role="button"
                aria-label="Switch to React framework"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleSwitchFramework('react', 3001)}
                 src={reactLogo} alt="React"/>

        </div>
    );
};

export default FrameworkSwitcher;
