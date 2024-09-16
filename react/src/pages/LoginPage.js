import React from 'react';

import Footer from "../components/shared/Footer";

import InNavLayout from "../layout/InNavLayout";
import LoginHeroSection from "../components/specific/LoginPage/LoginHeroSection";
import FeatureSection from "../components/specific/HomePage/FeatureSection"; // Use AccountContext here

const LoginPage = () => {


    return (
        <div>
            <InNavLayout style={{marginTop: '10px'}}>
                <LoginHeroSection/>
            </InNavLayout>
            <FeatureSection />
            <Footer/>
        </div>
    );
};

export default LoginPage;
