import {AUTH} from "../constants/auth.ts";

const ACCESS_TOKEN = AUTH.ACCESS_TOKEN;
const REFRESH_TOKEN = AUTH.REFRESH_TOKEN;

export const tokenService = {
    getAccessToken: () => localStorage.getItem(ACCESS_TOKEN),
    getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN),

    setTokens: (access: string, refresh: string) => {
        localStorage.setItem(ACCESS_TOKEN, access);
        localStorage.setItem(REFRESH_TOKEN, refresh);
    },

    clear: () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
    },
};
