import React, { useState } from 'react';
import { Tabs, Tab} from 'react-bootstrap';
import './TabSectionLayout.css';

const TabSectionLayout = ({ sections, style }) => {
    const [activeKey, setActiveKey] = useState(sections[0]?.key || ''); // Default active tab

    return (
        <div style={{...style}}>
            <Tabs
                id="custom-tab-section-layout"
                activeKey={activeKey}
                onSelect={(k) => setActiveKey(k)}
                className="custom-tabs"
                justify
            >
                {sections.map((section) => (
                    <Tab
                        eventKey={section.key}
                        title={section.title}
                        key={section.key}
                        className="custom-tab"
                    />
                ))}
            </Tabs>
            <div className="tab-section-layout">

                <div className="custom-tab-content">
                    {sections.map((section) => (
                        <div
                            key={section.key}
                            style={{display: activeKey === section.key ? 'block' : 'none'}}
                        >
                            {section.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabSectionLayout;
