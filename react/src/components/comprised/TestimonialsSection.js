import {Col, Row} from "react-bootstrap";
import React from "react";

const TestimonialsSection = () => {
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
            <style dangerouslySetInnerHTML={{__html: styles}}></style>
            <div className="testimonials-section py-5">
                <h2 className="text-center">What Our Users Are Saying</h2>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <div className="testimonial">
                            <p>"LiftLog has transformed the way I track my workouts!"</p>
                            <h5>- Alex Johnson</h5>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="testimonial">
                            <p>"The meal tracker is so easy to use, and I love the UI!"</p>
                            <h5>- Emily Davis</h5>
                        </div>
                    </Col>
                </Row>
            </div>
        </>

    );
};

export default TestimonialsSection;
