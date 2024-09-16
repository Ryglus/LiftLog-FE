import React from 'react';

import HeroSection from "../components/specific/HomePage/HeroSection";
import CallToActionSection from "../components/specific/HomePage/CallToActionSection";

import Footer from "../components/shared/Footer";
import InNavLayout from "../layout/InNavLayout";
import TabSectionLayout from "../layout/TabSectionLayout";
import CommunitySection from "../components/specific/HomePage/TabSections/CommunitySection";
import OverViewSection from "../components/specific/HomePage/TabSections/OverViewSection";
import TrackingAnalyticsSection from "../components/specific/HomePage/TabSections/TrackingAnalyticsSection";

const HomePage = () => {
    const sections = [
        { key: 'overview', title: 'Overview', content: <OverViewSection/> },
        { key: 'details', title: 'Tracking & Analytics', content: <TrackingAnalyticsSection/> },
        { key: 'settings', title: 'Community', content: <CommunitySection/> },
    ];
    return (
        <div>
            <InNavLayout style={{ marginTop: '10px' }}>
                <HeroSection/>
            </InNavLayout>
            <TabSectionLayout style={{ marginTop: '20px' }} sections={sections} />
            <CallToActionSection style={{ marginTop: '20px' }}/>
            <Footer/>
        </div>
    );
};

export default HomePage;
