import axios from 'axios';
import AuthService from './AuthService'; // Ensure tokens are attached

const BASE_URL = 'http://localhost:8081/api'; // Use different port for user-related operations

class UserService {
    // Get the current user info
    async getCurrentUser() {
        try {
            const response = await axios.get(`${BASE_URL}/whoami`);
            return response.data; // Return the user information
        } catch (error) {
            console.error('Error fetching user info:', error);
            throw new Error('Failed to retrieve user information');
        }
    }
}

export default new UserService();
