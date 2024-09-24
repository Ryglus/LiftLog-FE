import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './ProfileSearch.css';
import AvatarImageThumbnail from "./AvatarImageThumbnail";

const ProfileSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1); // Track active item index
    const navigate = useNavigate();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (query !== '') {
                handleSearch();
            }
            setIsTyping(false);
        }, 200); // Adjust delay time as needed

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    // Listen for key presses to navigate between profile items
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
            }
            if (e.key === 'ArrowUp') {
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
            }
            if (e.key === 'Enter' && activeIndex !== -1 && results.length > 0) {
                handleProfileClick(results[activeIndex].username);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [results, activeIndex]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/api/search`, {
                params: { query }
            });
            if (response.data.length > 0) {
                setResults(response.data);
                setActiveIndex(0); // Set the first result as active
            } else {
                setResults([]);
                setActiveIndex(-1);
            }
        } catch (error) {
            console.error('Error searching profiles:', error);
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (query.length < 1) setResults([]);
        setIsTyping(true);
    };

    const handleProfileClick = (username) => {
        navigate(`/profile/${username}`);
        setQuery(''); // Clear the search input
        setResults([]); // Clear the search results
    };

    return (
        <div className="profile-search-container">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search profiles..."
                className="search-input"
            />
            {(results.length > 0 || isTyping) && query ? (
                <div className="profile-results-section">
                    <ul className="profile-results">
                        {isTyping && (
                            <li className="spinner-item">
                                <div className="spinner"></div>
                            </li>
                        )}
                        {results.map((user, index) => (
                            <li
                                key={user.id}
                                className={`profile-item ${index === activeIndex ? 'active' : ''}`} // Apply 'active' class if selected
                                onClick={() => handleProfileClick(user.username)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handleProfileClick(user.username)}
                            >
                                <div className="profile-image">
                                    <AvatarImageThumbnail border={false} path={user.profile_image} canEdit={false}/>
                                </div>
                                <div className="profile-info">
                                    {user.full_name ? (
                                        <>
                                            <div className="profile-fullname">{user.full_name}</div>
                                            <div className="profile-username">@{user.username}</div>
                                        </>
                                    ) : (
                                        <div className="profile-fullname">{user.username}</div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default ProfileSearch;
