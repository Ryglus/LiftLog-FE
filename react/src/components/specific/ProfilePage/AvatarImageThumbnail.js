import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import axios from 'axios';
import defaultAvatar from "../../../assets/avatar.webp";
import StorageService from "../../../services/StorageService";
import './AvatarImageThumbnail.css';
import { useToast } from "../../../contexts/ToastContext"; // For hover styles

const AvatarImageThumbnail = ({ path, canEdit = false }) => {
    const [profileImage, setProfileImage] = useState(null);
    const { showToast } = useToast();
    // Handle profile image change
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);

            // Create FormData to upload the profile image
            const formData = new FormData();
            formData.append('profile_image', file);

            try {
                const response = await axios.put('http://localhost:8081/api/profile', formData, {
                    headers: {
                        'Authorization': `Bearer ${StorageService.getAccessToken()}`,
                    },
                });
                showToast('Profile image updated successfully', 'success');
            } catch (error) {
                console.error('Error updating profile image:', error);
                showToast('Error updating profile: ' + error, 'danger');
            }
        }
    };

    return (
        <div className="avatar-container">
            {canEdit && (
                <input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    style={{display: 'none'}}
                    onChange={handleFileChange}
                />
            )}

            <label htmlFor="file-input" className="avatar-image-header-label">
                <img
                    className="avatar-image-header"
                    src={path ? "http://localhost:8081/"+path : (defaultAvatar)}
                    alt="Profile"
                />
                {canEdit && (
                    <>
                        {/* Badge for mobile view */}
                        <label htmlFor="file-input" className="edit-icon-bdge">
                            <FaPen className="edit-icon edit-icon-phone" />
                        </label>
                    </>
                )}
            </label>


        </div>
    );
};

export default AvatarImageThumbnail;
