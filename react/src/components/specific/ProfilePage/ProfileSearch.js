import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './ProfileSearch.css'; // Import the CSS file for styling

const ProfileSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (query !== '') {
                handleSearch();
            }
            setIsTyping(false);
        }, 500); // Adjust delay time as needed (500ms)

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/api/search`, {
                params: { query }
            });
            if (response.data.length > 0) {
                setResults(response.data);
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
                <ul className="profile-results">
                    {isTyping && (
                        <li className="spinner-item">
                            <div className="spinner"></div>
                        </li>
                    )}
                    {results &&
                        (results.map((user) => (
                            <li
                                key={user.id}
                                className="profile-item"
                                onClick={() => handleProfileClick(user.username)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handleProfileClick(user.username)}
                            >
                                {user.profile_image && (
                                    <img src={`http://localhost:8081/${user.profile_image}`} alt="Profile"
                                         className="profile-image"/>
                                )}
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
                        )))
                    }
                </ul>
            ) : null}
        </div>
    );
};

export default ProfileSearch;
