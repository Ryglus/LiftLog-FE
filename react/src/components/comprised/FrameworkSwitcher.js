import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FrameworkSwitcher.css';
import vueLogo from '../../assets/frameworks/Vue-icon.svg'; // Your Vue logo image
import angularLogo from '../../assets/frameworks/Angular-icon.svg'; // Your Angular logo image
import reactLogo from '../../assets/frameworks/React-icon.svg'; // Your React logo image

const FrameworkSwitcher = () => {
    // State to track the active port based on the current URL
    const [activeFramework, setActiveFramework] = useState('');

    // Function to handle switching to a different port
    const handleSwitchFramework = (framework, port) => {
        window.location.href = `http://localhost:${port}`;
    };

    // UseEffect to detect the current active framework based on the URL
    useEffect(() => {
        const currentPort = window.location.port;
        switch (currentPort) {
            case '3001': // React default port
                setActiveFramework('react');
                break;
            case '3002': // Angular default port
                setActiveFramework('angular');
                break;
            case '3003': // Vue default port
                setActiveFramework('vue');
                break;
            default:
                setActiveFramework('');
        }
    }, []);

    return (
        <Container className="framework-switcher">
            <Row className="justify-content-center">
                <Col md={4}>
                    <Card
                        className={`framework-card ${activeFramework === 'vue' ? 'active' : ''}`}
                        onClick={() => handleSwitchFramework('vue', 3003)}
                    >
                        <Card.Img variant="top" src={vueLogo} alt="Vue" />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card
                        className={`framework-card ${activeFramework === 'angular' ? 'active' : ''}`}
                        onClick={() => handleSwitchFramework('angular', 3002)}
                    >
                        <Card.Img variant="top" src={angularLogo} alt="Angular" />

                    </Card>
                </Col>
                <Col md={4}>
                    <Card
                        className={`framework-card ${activeFramework === 'react' ? 'active' : ''}`}
                        onClick={() => handleSwitchFramework('react', 3001)}
                    >
                        <Card.Img variant="top" src={reactLogo} alt="React" />

                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FrameworkSwitcher;
