import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

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
            setResults(response.data);
        } catch (error) {
            console.error('Error searching profiles:', error);
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setIsTyping(true);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search profiles..."
            />
            {isTyping && <p>Searching...</p>}
            <ul>
                {results.map((user) => (
                    <li key={user.id}>
                        {user.username} - {user.bio}
                        {user.profile_image && (
                            <img src={`http://localhost:8081/${user.profile_image}`} alt="Profile" width="50" />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileSearch;
