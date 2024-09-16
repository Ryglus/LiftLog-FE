import axios from 'axios';
import StorageService from './StorageService';
import {jwtDecode} from "jwt-decode"; // Use StorageService for token handling

const BASE_URL_PATH = process.env.REACT_APP_BASE_URL_PATH+":8080" || 'http://localhost:8080';
const URL_DESTINATION = "/api/auth";
const BASE_URL = `${BASE_URL_PATH}${URL_DESTINATION}`;

class AuthService {
    // Register new account
    async register(accountData) {
        try {
            const response = await axios.post(`${BASE_URL}/register`, accountData);
            const { accessToken, refreshToken } = response.data;
            StorageService.setAccessToken(accessToken);
            StorageService.setRefreshToken(refreshToken);
            return { success: true, accessToken };
        } catch (error) {
            console.error('Error registering:', error);
            return { success: false, message: 'Registration failed' };
        }
    }

    // Login existing account
    async login(email, password) {
        try {
            const response = await axios.post(`${BASE_URL}/login`, { email, password });
            const { access_token, refresh_token } = response.data;
            StorageService.setAccessToken(access_token);
            StorageService.setRefreshToken(refresh_token);
            return { success: true, access_token };
        } catch (error) {
            console.error('Error logging in:', error);
            return { success: false, message: 'Invalid username or password' };
        }
    }

    // Refresh the access token using the refresh token
    async refreshAccessToken() {
        try {
            const refreshToken = StorageService.getRefreshToken();
            const response = await axios.post(`${BASE_URL}/refresh`, { refreshToken });
            const { accessToken } = response.data;
            StorageService.setAccessToken(accessToken);
            return accessToken;
        } catch (error) {
            console.error('Error refreshing access token:', error);
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
        } catch (error) {
            console.error('Error decoding token:', error);
            return true;
        }
    }

    // Check if the user is logged in
    isLoggedIn() {
        return !this.isAccessTokenExpired();
    }

    // Logout the user
    logout() {
        StorageService.clearTokens();
    }

    // Attach the access token to axios requests
    attachTokenToRequest() {
        const accessToken = StorageService.getAccessToken();
        if (accessToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
}

export default new AuthService();
