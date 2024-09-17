import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import StorageService from "../../../services/StorageService";

const UpdateProfile = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        bio: '',
        location: '',
    });
    const [profileImage, setProfileImage] = useState(null); // Handle profile image
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setProfileImage(e.target.files[0]); // Set the profile image
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(); // Create a new FormData object
            formData.append('username', profileData.username);
            formData.append('bio', profileData.bio);
            formData.append('location', profileData.location);

            const response = await axios.put('http://localhost:8081/api/profile', formData, {
                headers: {
                    'Authorization': `Bearer ${StorageService.getAccessToken()}`
                }
            });

            setMessage('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage('Error updating profile');
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center">Update Profile</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={profileData.username}
                                onChange={handleInputChange}
                                placeholder="Enter your username"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBio" className="mb-3">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="bio"
                                value={profileData.bio}
                                onChange={handleInputChange}
                                placeholder="Tell something about yourself"
                            />
                        </Form.Group>

                        <Form.Group controlId="formLocation" className="mb-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={profileData.location}
                                onChange={handleInputChange}
                                placeholder="Where are you located?"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Update Profile
                        </Button>
                        {message && <p className="mt-3 text-center">{message}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateProfile;
