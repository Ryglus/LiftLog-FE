import React from 'react';

import Footer from "../components/shared/Footer";
import InNavLayout from "../layout/InNavLayout";

import AnalyticsHeroSection from "../components/specific/AnalyticsPage/AnalyticsHeroSection";

const AnalyticsPage = () => {

    return (
        <div>
            <InNavLayout style={{marginTop: '10px'}}>
                <AnalyticsHeroSection/>
            </InNavLayout>

            <Footer/>
        </div>
    );
};

export default AnalyticsPage;
