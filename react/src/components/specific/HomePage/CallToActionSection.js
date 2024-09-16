import React from 'react';
import { Button } from 'react-bootstrap';

const CallToActionSection = () => {
    const styles = `
        .cta-section {
            background-color: var(--primary-500);
            color: var(--text-50);
            padding: 50px 20px;
        }
        .cta-btn {
            background-color: var(--text-50);
            color: var(--primary-500);
            transition: background-color 0.3s ease;
        }
        .cta-btn:hover {
            background-color: var(--primary-600);
        }
    `;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }}></style>
            <div className="cta-section text-center py-5">
                <h2>Ready to Transform Your Fitness Journey?</h2>
                <p>Join LiftLog today and start tracking your meals and workouts effortlessly.</p>
                <Button size="lg" className="cta-btn">Sign Up Now</Button>
            </div>
        </>
    );
};

export default CallToActionSection;
