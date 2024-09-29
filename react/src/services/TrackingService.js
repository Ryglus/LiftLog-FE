import axios from 'axios';
import StorageService from './StorageService';

const BASE_URL = process.env.REACT_APP_BASE_URL_PATH + ":8082/api/tracking" || 'http://localhost:8082/api/tracking';

class TrackingService {
    async fetchTrackingData() {
        try {
            const response = await axios.get(`${BASE_URL}/overview`, {
                headers: {
                    Authorization: `Bearer ${StorageService.getAccessToken()}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching tracking data:', error);
        }
    }
}

// Assign instance to a named variable before exporting
const trackingServiceInstance = new TrackingService();
export default trackingServiceInstance;
