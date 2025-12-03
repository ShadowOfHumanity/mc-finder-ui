import axios from 'axios';

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const createAxiosInstance = (baseURL: string = DEFAULT_BASE_URL) => {
    const instance = axios.create({
        baseURL,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        },
    });
        // add a response interceptor
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            return Promise.reject(error);
        }
    );
    return instance;
}

const axiosInstance = createAxiosInstance();

export default axiosInstance;