import React from 'react';
import './SharedTabSection.css';
import leaderboardImage from '../../../../assets/homepage/leaderboard.webp'; // Placeholder for leaderboard image
import challengesImage from '../../../../assets/homepage/challenges.webp'; // Placeholder for challenges image
import socialSharingImage from '../../../../assets/homepage/social-sharing.webp'; // Placeholder for social sharing image
import { Col, Row } from 'react-bootstrap';

const CommunitySection = () => {
    return (
        <div className="tab-section community-section">
            {/* Introduction to the Community */}
            <section className="community-intro">
                <h2>Join the LiftLog Community</h2>
                <p>
                    LiftLog isn't just about personal growth—it's about growing together. Connect with fellow fitness enthusiasts, share your progress, and celebrate wins as part of a thriving community. Whether you're pushing through a challenging workout or smashing a personal record, our community is here to cheer you on.
                </p>
            </section>

            <hr className="section-separator" />

            {/* Leaderboards */}
            <section className="leaderboard-section">
                <h3>Compete in Leaderboards</h3>
                <p>
                    Want to see how you stack up against others? Join our leaderboards to compete with athletes worldwide. Track your rank based on workouts completed, weight lifted, or even community challenges won!
                </p>
                <Row className="images-wrapper">
                    <Col sm={12} md={4}>
                        <img src={leaderboardImage} alt="Leaderboard" className="tab-img" />
                    </Col>
                    <Col sm={12} md={8}>
                        <h4>Leaderboard Features:</h4>
                        <ul>
                            <li>Weekly, monthly, and all-time leaderboards</li>
                            <li>Compete in specific exercises or overall fitness levels</li>
                            <li>Win badges for top placements</li>
                        </ul>
                    </Col>
                </Row>
            </section>

            <hr className="section-separator" />

            {/* Community Challenges */}
            <section className="challenges-section">
                <h3>Join Exciting Community Challenges</h3>
                <p>
                    Participate in fun and engaging community challenges. Whether it’s a 30-day fitness challenge or a weekend workout blitz, you’ll find something to keep you motivated and push your limits.
                </p>
                <Row className="images-wrapper mt-4">
                    <Col sm={12} md={6}>
                        <h4>Challenge Highlights:</h4>
                        <ul>
                            <li>Global challenges for everyone</li>
                            <li>Create or join local challenges with friends</li>
                            <li>Earn rewards and trophies for completing challenges</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3}>
                        <img src={challengesImage} alt="Community Challenges" className="tab-img" />
                    </Col>
                </Row>
            </section>

            <hr className="section-separator" />

            {/* Social Sharing */}
            <section className="social-sharing-section">
                <h3>Share Your Achievements with the World</h3>
                <p>
                    At LiftLog, we believe that every win is worth celebrating. Share your workout achievements, progress photos, and milestone moments with friends and followers. Our integrated social sharing tools make it easy to show off your progress.
                </p>
                <Row>
                    <Col sm={12} md={3}>
                        <img src={socialSharingImage} alt="Social Sharing" className="tab-img" />
                    </Col>
                    <Col sm={12} md={6}>
                        <h4>Social Features:</h4>
                        <ul>
                            <li>Share workout summaries on social media</li>
                            <li>Post progress photos with custom captions</li>
                            <li>Connect with other LiftLog users and follow their journeys</li>
                        </ul>
                    </Col>
                </Row>
            </section>

            <hr className="section-separator" />

            {/* Call to Action */}
            <section className="community-cta">
                <h3>Become Part of Something Bigger</h3>
                <p>
                    Join the LiftLog community today and become part of a fitness revolution. Push yourself to new limits, inspire others, and enjoy the support of people just like you. Together, we can achieve greatness!
                </p>
                <button className="cta-button">Join the Community</button>
            </section>
        </div>
    );
};

export default CommunitySection;
