class StorageService {
    setItem(key, value) {
        localStorage.setItem(key, value);
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }

    // Token-related convenience methods
    setAccessToken(token) {
        this.setItem('access_token', token);
    }

    getAccessToken() {
        return this.getItem('access_token');
    }

    setRefreshToken(token) {
        this.setItem('refresh_token', token);
    }

    getRefreshToken() {
        return this.getItem('refresh_token');
    }

    clearTokens() {
        this.removeItem('access_token');
        this.removeItem('refresh_token');
    }
}

export default new StorageService();
