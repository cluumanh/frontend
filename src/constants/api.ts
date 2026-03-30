const BASE_API = "/v1";
const AUTH_PATH = "/auth";
const ADMIN_PATH = "/admin";
export const API = {
    BASE_API,
    ADMIN_PATH,
    AUTH: {
        LOGIN: `${BASE_API}${AUTH_PATH}/login`,
        REGISTER: `${BASE_API}${AUTH_PATH}/register`,
        REFRESH: `${BASE_API}${AUTH_PATH}/refresh`,
    },
    USERS: {
        GET_USERS: `${ADMIN_PATH}/users`,
    }
} as const;