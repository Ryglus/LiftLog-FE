import React from 'react';

import FeatureSection from "../components/specific/HomePage/FeatureSection";
import HeroSection from "../components/specific/HomePage/HeroSection";
import TestimonialsSection from "../components/specific/HomePage/TestimonialsSection";
import CallToActionSection from "../components/specific/HomePage/CallToActionSection";

import Footer from "../components/shared/Footer";
import InNavLayout from "../layout/InNavLayout";

const HomePage = () => {
    return (
        <div>
            <InNavLayout style={{ marginTop: '10px' }}>
                <HeroSection/>
            </InNavLayout>
            <FeatureSection />
            <TestimonialsSection/>
            <CallToActionSection/>
            <Footer/>
        </div>
    );
};

export default HomePage;
