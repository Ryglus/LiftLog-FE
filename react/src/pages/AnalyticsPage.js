import React from 'react';

import Footer from "../components/shared/Footer";
import InNavLayout from "../layout/InNavLayout";
import {TrackingProvider} from '../contexts/TrackingContext';
import AnalyticsHeroSection from "../components/specific/AnalyticsPage/AnalyticsHeroSection";

const AnalyticsPage = () => {
    return (
        <div>
            <TrackingProvider>
                <InNavLayout style={{marginTop: '10px'}}>
                    <AnalyticsHeroSection/>
                </InNavLayout>

                <Footer/>
            </TrackingProvider>
        </div>
    );
};

export default AnalyticsPage;
