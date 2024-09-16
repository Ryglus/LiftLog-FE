import React from 'react';
import './SharedTabSection.css';
import workoutImage from '../../../../assets/homepage/workout-snapshot.webp';
import nutritionImage from '../../../../assets/homepage/nutrition-tracking.webp';
import progressImage from '../../../../assets/homepage/progress-graph.webp';
import {Col, Row} from "react-bootstrap";

const OverViewSection = () => {
    return (
        <div className="tab-section overview-section">
            {/* Introduction */}
            <section className="intro-section">
                <h2>Welcome to LiftLog - Your Ultimate Fitness Companion</h2>
                <p>
                    LiftLog is more than just a workout tracker—it's your personal guide to reaching your fitness goals.
                    Whether you're a beginner just starting your journey, a seasoned athlete, or someone looking to
                    improve their health and well-being, LiftLog has you covered. Track your workouts, manage your
                    nutrition, and monitor your progress, all in one seamless experience.
                </p>
            </section>

            <hr className="section-separator"/>

            {/* Personalized Plans */}
            <section className="personalized-section">
                <h3>Personalized Workout & Nutrition Plans</h3>
                <p>
                    Our app customizes your workout and meal plans based on your unique preferences and fitness level.
                    Choose from strength training, cardio, or hybrid routines, and combine them with tailored nutrition
                    plans that suit your dietary preferences—whether it's vegan, keto, or something in between.
                </p>
                <Row className="d-flex justify-content-center">
                    <Col xs={4} className="align-items-center"><img src={workoutImage} alt="Personalized Workout Plan" className="tab-img" /></Col>
                    <Col xs={4} className="align-items-center"><img src={nutritionImage} alt="Nutrition Tracking" className="tab-img" /></Col>
                </Row>
            </section>

            <hr className="section-separator"/>

            {/* Real-Time Tracking */}
            <section className="tracking-section">
                <h3>Real-Time Workout & Nutrition Tracking</h3>
                <p>
                    Gone are the days of manual logging! LiftLog's real-time workout tracker allows you to input your
                    sets, reps, and weights as you go, making your workout experience smooth and seamless. Monitor your
                    nutrition by scanning barcodes or selecting from a comprehensive food database to track macros and
                    calories accurately.
                </p>
            </section>

            <hr className="section-separator"/>

            {/* Progress Visualization */}
            <section className="progress-section">
                <Row>
                    <Col sm={12} md={3}>
                        <img src={progressImage} alt="Progress Tracking Graph" className="tab-img"/>
                    </Col>
                    <Col>
                        <h3>Track Your Progress with Detailed Analytics</h3>
                        <p>
                            LiftLog offers detailed reports on your progress. From workout statistics like total weight
                            lifted to comprehensive analytics on your body measurements, weight fluctuations, and muscle
                            growth, the app visualizes your journey, keeping you motivated every step of the way.
                        </p>
                    </Col>
                </Row>
            </section>

            <hr className="section-separator"/>

            {/* Community */}
            <section className="community-highlight">
                <h3>Join a Thriving Fitness Community</h3>
                <p>
                    LiftLog isn’t just about logging data—it’s about connecting with a community of like-minded
                    individuals. Share your progress, participate in challenges, exchange tips, and celebrate milestones
                    with others on their own fitness journey.
                </p>
                <p>
                    With built-in social features like leaderboards, community workouts, and public profiles, you'll
                    stay motivated and inspired by people just like you.
                </p>
            </section>

            <hr className="section-separator"/>

            {/* Unique Features */}
            <section className="features-highlight">
                <h3>Unique Features That Set Us Apart</h3>
                <ul>
                    <li><strong>Workout Split Planner:</strong> Design your own weekly workout schedule or choose from
                        popular splits used by athletes worldwide.
                    </li>
                    <li><strong>Supplement Tracker:</strong> Keep track of your supplements and make sure you're staying
                        consistent with your routine.
                    </li>
                    <li><strong>Custom Exercises:</strong> Add your own exercises and log them during your workouts,
                        giving you complete control over your fitness plan.
                    </li>
                    <li><strong>Progress Photos:</strong> Upload progress photos to see your transformation over
                        time—side-by-side comparisons included.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default OverViewSection;
