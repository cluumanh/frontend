const BASE_API = "/v1";
export const API = {
    BASE_API,
    AUTH: {
        LOGIN: `${BASE_API}/users/login`,
        REFRESH: `${BASE_API}/users/refresh`,
    },
} as const;