import React from 'react';
import { Card, Image } from 'react-bootstrap';

import './otheroption.css';
import {FaEllipsisH} from "react-icons/fa";


const ProfileSectionCard = ({img, bottomRow, title}) => {
    return (
        <Card className="workout-card">
            {/* Top-right Ellipsis Icon */}
            <div className="ellipsis-icon">
                <FaEllipsisH />
            </div>

            {/* Image Section */}
            <div className="image-container">
                <Image className="card-img-top" src={img} />
                <div className="title-overlay">
                    <div className="my-card-title" >
                        {title}
                    </div>
                </div>
            </div>

            {/* Icons Section */}
            <div className="icon-section">
                {bottomRow}
            </div>
        </Card>
    );
};

export default ProfileSectionCard;
