import React from 'react';
import './SharedTabSection.css';
import performanceImage from '../../../../assets/homepage/performance-stats.webp'; // Placeholder for performance stats image
import progressAnalyticsImage from '../../../../assets/homepage/progress-analytics.webp'; // Placeholder for progress analytics image
import { Col, Row } from "react-bootstrap";

const TrackingAnalyticsSection = () => {
    return (
        <div className="tab-section tracking-analytics-section">
            {/* Introduction to Tracking and Analytics */}
            <section className="tracking-intro">
                <h2>Tracking & Analytics - Precision at Every Step</h2>
                <p>
                    At LiftLog, we believe that what gets measured, gets improved. That's why we've built cutting-edge
                    tracking tools to give you real-time insight into every workout, every meal, and every step of your
                    fitness journey.
                </p>
            </section>

            <hr className="section-separator"/>

            {/* Performance Tracking */}
            <section className="performance-tracking">
                <h3>Track Your Performance in Real-Time</h3>
                <p>
                    Our real-time workout tracker ensures that every set, rep, and weight is accurately logged. Whether
                    you're lifting in the gym or completing a home workout, LiftLog tracks it all, allowing you to focus
                    on what matters most—your progress.
                </p>
                <Row className="images-wrapper">
                    <Col sm={12} md={6}>
                        <img src={performanceImage} alt="Performance Stats" className="tab-img"/>
                    </Col>
                    <Col sm={12} md={6}>
                        <h4>Advanced Tracking Features:</h4>
                        <ul>
                            <li>Real-time rep and set tracking</li>
                            <li>Rest timers to maximize recovery</li>
                            <li>Exercise-specific analytics</li>
                            <li>Workout duration and intensity levels</li>
                        </ul>
                    </Col>
                </Row>
            </section>
            <hr className="section-separator"/>

            {/* Custom Reports */}
            <section className="custom-reports">
                <h3>Create Custom Reports</h3>
                <p>
                    Generate custom reports that focus on the metrics that matter most to you. Choose from workout
                    volume, body composition, or nutrition stats, and export detailed PDFs to keep your data handy.
                </p>
            </section>
            <hr className="section-separator"/>

            {/* Progress Analytics */}
            <section className="progress-analytics">
                <h3>Detailed Progress Analytics</h3>
                <p>
                    Visualize your progress with detailed graphs and analytics. From your strength improvements to body
                    weight fluctuations, LiftLog tracks every key metric to ensure you’re on the right track.
                </p>
                <Row>
                    <Col sm={12} md={4}>
                        <img src={progressAnalyticsImage} alt="Progress Analytics Graph" className="tab-img"/>
                    </Col>
                    <Col>
                        <h4>Key Analytics:</h4>
                        <ul>
                            <li>Track total weight lifted over time</li>
                            <li>Visualize body measurements and progress</li>
                            <li>Monitor workout consistency and adherence</li>
                            <li>View caloric intake vs. output for better results</li>
                        </ul>
                    </Col>
                </Row>
            </section>


            <hr className="section-separator"/>

            {/* Personal Progress Stories */}
            <section className="progress-stories">
                <h3>Your Progress, Your Story</h3>
                <p>
                    Track your personal story through your achievements. LiftLog allows you to record progress photos,
                    track milestones, and celebrate small wins along the way.
                </p>
            </section>
        </div>
    );
};

export default TrackingAnalyticsSection;
