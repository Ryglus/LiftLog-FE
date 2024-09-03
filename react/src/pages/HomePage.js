import React from 'react';


const HomePage = () => {
    // Function to navigate to the signup page
    const navigateToSignup = () => {
        console.log('Navigating to Signup...');
        // Add your navigation logic here
    };

    return (
        <main className="homepage">
            <section className="welcome">
                <h2>Welcome to LiftLog!</h2>
                <p>Your personal gym assistant to track and improve your workouts.</p>
                <button className="cta-button" onClick={navigateToSignup}>
                    Get Started
                </button>
            </section>

            <section className="features">
                <div className="feature large-feature">
                    <h3>Track Your Workouts</h3>
                    <p>Log your exercises, sets, and reps to keep track of your progress.</p>
                </div>
                <div className="feature">
                    <h3>Visualize Progress</h3>
                    <p>View your workout progress with charts and stats to stay motivated.</p>
                </div>
                <div className="feature">
                    <img src={process.env.PUBLIC_URL + '/assets/dumbell.png'} alt="LiftLog Logo" />
                    <h3>Explore Exercises</h3>
                    <p>Find exercises and create personalized workout plans tailored to your goals.</p>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
