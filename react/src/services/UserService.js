import axios from 'axios';
import AuthService from './AuthService';

const BASE_URL = 'http://localhost:8081/api'; // User-related operations

class UserService {
    // Get the current user info
    async getCurrentUser() {
        await AuthService.ensureValidToken(); // Ensure token is valid before request
        try {
            const response = await axios.get(`${BASE_URL}/profile/me`);
            return response.data; // Return the user information
        } catch (error) {
            throw new Error('Failed to retrieve user information');
        }
    }
}

export default new UserService();
