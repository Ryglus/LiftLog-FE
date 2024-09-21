import React, {useRef, useState} from 'react';
import {FaPen} from 'react-icons/fa';
import axios from 'axios';
import defaultAvatar from "../../../assets/avatar.webp";
import StorageService from "../../../services/StorageService";
import './AvatarImageThumbnail.css';
import {useToast} from "../../../contexts/ToastContext";

const AvatarImageThumbnail = ({path, canEdit = false, border = true}) => {
    const [profileImage, setProfileImage] = useState(null);
    const { showToast } = useToast();
    const fileInputRef = useRef(null); // Ref for the file input

    // Handle profile image change
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);

            // Create FormData to upload the profile image
            const formData = new FormData();
            formData.append('profile_image', file);

            try {
                await axios.put('http://localhost:8081/api/profile', formData, {
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

    // Trigger file input click when the image is clicked
    const handleImageClick = () => {
        if (canEdit) {
            fileInputRef.current.click(); // Trigger the hidden file input click
        }
    };

    return (
        <div className="avatar-container">
            <div className={"avatar-image-header-label"}>


            <img
                className={`avatar-image-header ${border ? "avatar-image-header-bordered" : ""} ${canEdit ? "avatar-pointer" : ""}`}
                src={path ? "http://localhost:8081/" + path : defaultAvatar}
                alt="Profile"
                onClick={handleImageClick} // Handle click event on the image
            />
            {canEdit && (
                <>
                    {/* Hidden file input for uploading new image */}
                    <input
                        type="file"
                        id="file-input"
                        ref={fileInputRef} // Associate the input with the ref
                        accept="image/*"
                        style={{display: 'none'}}
                        onChange={handleFileChange}
                    />
                    {/* Badge for mobile view */}
                    <label htmlFor="file-input" className={`edit-icon-bdge ${canEdit ? "avatar-pointer" : ""}`}>
                        <FaPen className="edit-icon"/>
                    </label>
                </>
            )}
        </div>
        </div>
    );
};

export default AvatarImageThumbnail;
