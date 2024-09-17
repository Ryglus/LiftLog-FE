import axios from 'axios';
import StorageService from './StorageService';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode

const BASE_URL = process.env.REACT_APP_BASE_URL_PATH+":8080/api/auth" || 'http://localhost:8080/api/auth';

class AuthService {
    // Register new account
    async register(accountData) {
        try {
            const response = await axios.post(`${BASE_URL}/register`, accountData);
            const { accessToken, refreshToken } = response.data;
            StorageService.setAccessToken(accessToken);
            StorageService.setRefreshToken(refreshToken);
            return { success: true };
        } catch (error) {
            return { success: false, message: 'Registration failed' };
        }
    }

    // Login and store tokens
    async login(email, password) {
        try {
            const response = await axios.post(`${BASE_URL}/login`, { email, password });
            const { access_token, refresh_token } = response.data;
            StorageService.setAccessToken(access_token);
            StorageService.setRefreshToken(refresh_token);
            return { success: true };
        } catch (error) {
            return { success: false, message: 'Invalid username or password' };
        }
    }

    // Refresh the access token using the refresh token
    async refreshAccessToken() {
        try {
            const refreshToken = StorageService.getRefreshToken();
            console.log("rft: "+ refreshToken)
            if (refreshToken) {
                const response = await axios.post(
                    `${BASE_URL}/refresh-token`,
                    {},  // No need for body in this case, just headers
                    {
                        headers: {
                            'Authorization': `Bearer ${refreshToken}` // Send the refresh token securely
                        }
                    }
                );
                const { access_token } = response.data;
                StorageService.setAccessToken(access_token);
                this.attachTokenToRequest(access_token);
                return access_token;
            }
            return null;
        } catch (error) {
            this.logout();
            return null;
        }
    }

    // Check if the access token is expired
    isAccessTokenExpired() {
        const token = StorageService.getAccessToken();
        if (!token) return true;

        try {
            const { exp } = jwtDecode(token);
            return Date.now() >= exp * 1000;
        } catch {
            return true;
        }
    }
    isLoggedIn() {

        return this.ensureValidToken();
    }
    // Automatically refresh token if expired
    async ensureValidToken() {
        if (this.isAccessTokenExpired()) {
            return await this.refreshAccessToken();
        }
        return StorageService.getAccessToken();
    }

    // Logout the user
    logout() {
        StorageService.clearTokens();
    }

    // Attach the access token to axios requests
    attachTokenToRequest(token = StorageService.getAccessToken()) {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
}

export default new AuthService();
