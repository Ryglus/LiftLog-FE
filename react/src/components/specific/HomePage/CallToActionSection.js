import React from 'react';
import { Button } from 'react-bootstrap';

const CallToActionSection = () => {


    return (
        <>
            <div className="cta-section text-center py-5">
                <h2>Ready to Transform Your Fitness Journey?</h2>
                <p>Join LiftLog today and start tracking your meals and workouts effortlessly.</p>
                <Button size="lg" className="cta-btn">Sign Up Now</Button>
            </div>
        </>
    );
};

export default CallToActionSection;
