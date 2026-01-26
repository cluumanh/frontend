import axios, {type AxiosRequestConfig} from 'axios';
import {tokenService} from '../../store/tokenService.ts'
import {AUTH} from "../../constants/auth.ts";
import {API} from "../../constants/api.ts";

type queueCallBack = (token: string) => void;
const apiUrl = import.meta.env.VITE_API_URL;

interface RetryAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
}

export const httpClient = axios.create({
    baseURL: apiUrl,
});

httpClient.interceptors.request.use(config => {
    const token = tokenService.getAccessToken();
    if (token) {
        config.headers.Authorization = `${AUTH.BEARER} ${token}`;
    }
    return config;
});

let isRefreshing = false;
let queue: queueCallBack[] = [];

httpClient.interceptors.response.use(
    res => res,
    async error => {
        const originalRequest = error.config as RetryAxiosRequestConfig;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise(resolve => {
                    queue.push((token: string) => {
                        originalRequest.headers = originalRequest.headers ?? {};
                        originalRequest.headers.Authorization = `${AUTH.BEARER} ${token}`;
                        resolve(httpClient(originalRequest));
                    });
                });
            }

            isRefreshing = true;
            try {
                const res = await axios.post(`${apiUrl}${API.AUTH.REFRESH}`, {
                    refreshToken: tokenService.getRefreshToken(),
                });

                tokenService.setTokens(
                    res.data.accessToken,
                    res.data.refreshToken
                );

                queue.forEach(cb => cb(res.data.accessToken));
                queue = [];

                return httpClient(originalRequest);
            } catch {
                tokenService.clear();
                window.location.href = '/login';
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
);
