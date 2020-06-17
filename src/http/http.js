import axios from 'axios';
import history from '../history';

const http = axios.create({
    // Dev Server
    baseURL: process.env.REACT_APP_BASE_URL
});
http.interceptors.request.use(function (config) {

    if (navigator.onLine) {
        const accessToken = localStorage.getItem('accessToken');
        config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
        return config;
    } else {
        // history.push('/connbroken');
        alert('Oops!! Seems your internet connection is broken. Please check and try again.')
        return false;
    }
});

export { http };