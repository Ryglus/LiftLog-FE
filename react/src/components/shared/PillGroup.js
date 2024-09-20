import React from 'react';
import './PillGroup.css';

const PillGroup = ({ pills }) => {
    return (
        <div className="pill-group">
            {pills.map((pill, index) => (
                <div
                    key={index}
                    className={`pill ${pill.variant || 'primary'} ${
                        index === 0 ? 'pill-first' : index === pills.length - 1 ? 'pill-last' : ''
                    }`}
                >
                    {pill.label}
                </div>
            ))}
        </div>
    );
};

export default PillGroup;
