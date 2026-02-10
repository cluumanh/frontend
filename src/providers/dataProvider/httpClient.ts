import axios, {type AxiosRequestConfig} from 'axios';
import {TokenManager} from '../../store/TokenManager.ts'
import {AUTH} from "../../constants/auth.ts";
import {API} from "../../constants/api.ts";
import {Util} from "../../utils/util.ts";
import {Common} from "../../constants/common.ts";

type queueCallBack = (token: string) => void;
const apiUrl = import.meta.env.VITE_API_URL;

interface RetryAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
}

export const httpClient = axios.create({
    baseURL: apiUrl,
});

httpClient.interceptors.request.use(config => {
    const token = TokenManager.getAccessToken();
    if (token) {
        config.headers.Authorization = `${AUTH.BEARER} ${token}`;
    }
    config.headers["X-Device-Id"] = Util.getDeviceId();
    config.headers["X-Client-Id"] = "web";
    return config;
});

let isRefreshing = false;
let queue: queueCallBack[] = [];

httpClient.interceptors.response.use(
    res => res?.data,
    async error => {
        const apiResponse = error?.response?.data;
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
                    refreshToken: TokenManager.getRefreshToken(),
                });

                TokenManager.setTokens(
                    res.data.accessToken,
                    res.data.refreshToken
                );

                queue.forEach(cb => cb(res.data.accessToken));
                queue = [];

                return httpClient(originalRequest);
            } catch {
                TokenManager.clear();
                if (window.location.pathname !== Common.LOGIN_PAGE_PATH) {
                    window.location.href = Common.LOGIN_PAGE_PATH;
                }
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject({
            status: apiResponse?.status,
            code: apiResponse?.code,
            message: apiResponse?.message,
        });
    }
);
