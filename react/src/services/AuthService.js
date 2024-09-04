import axios from 'axios';

const BASE_URL_PATH = process.env.REACT_APP_BASE_URL_PATH;
const URL_DESTINATION = "/auth"
const BASE_URL = BASE_URL_PATH + URL_DESTINATION;

const TOKEN_KEY = 'auth_token';

class AuthService {

    async register(accountData) {
        try {
            const response = await axios.post(`${BASE_URL}/register`, accountData);
            const token = response.data.token;
            this.setToken(token); // Save token to local storage
            return {success: true, token};
        } catch (error) {
            console.error('Error logging in:', error);
            return {success: false, message: 'Invalid username or password'};
        }
    }

    async loginWithGoogle(code) {
        try {
            const response = await axios.post(
                `${BASE_URL}/google`, {
                    code: code.code,
                });
            if (response.data.register) {
                return {success: false, register: response.data.register, info: response.data.info};
            } else {
                const {token} = response.data.token;
                this.setToken(token); // Save token to local storage
                return {success: true, token};
            }

        } catch (error) {
            console.error('Error logging in with Google:', error);
            return {success: false, message: 'Failed to log in with Google'};
        }

    }


    async login(username, password) {
        try {
            const response = await axios.post(`${BASE_URL}/login`, {username, password});
            const token = response.data.token;
            this.setToken(token); // Save token to local storage
            return {success: true, token};
        } catch (error) {
            console.error('Error logging in:', error);
            return {success: false, message: 'Invalid username or password'};
        }
    }

    setToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    }

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
    }

    isLoggedIn() {
        return !!this.getToken();
    }
}

export default new AuthService();