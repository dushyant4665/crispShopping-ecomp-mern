import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
const STRIPE_API_URL = process.env.REACT_APP_STRIPE_API_URL || 'http://localhost:8000/api';

// Common axios configuration
const commonConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
};

const api = axios.create({
    baseURL: API_BASE_URL,
    ...commonConfig
});

const stripeApi = axios.create({
    baseURL: STRIPE_API_URL,
    ...commonConfig
});

// Add response interceptor for better error handling
const addInterceptors = (instance) => {
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.code === 'ERR_NETWORK') {
                console.error('Network Error: Unable to connect to the server');
                return Promise.reject(new Error('Unable to connect to the server. Please check your internet connection.'));
            }

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                const message = error.response.data?.message || 'An error occurred';
                console.error('API Error:', {
                    status: error.response.status,
                    message: message,
                    url: error.config.url
                });
                return Promise.reject(new Error(message));
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                return Promise.reject(new Error('No response received from server'));
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Request setup error:', error.message);
                return Promise.reject(error);
            }
        }
    );

    // Add request interceptor to handle CORS preflight
    instance.interceptors.request.use(
        (config) => {
            // Add timestamp to prevent caching
            config.params = { ...config.params, _t: Date.now() };
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

addInterceptors(api);
addInterceptors(stripeApi);

export { api, stripeApi, API_BASE_URL, STRIPE_API_URL }; 