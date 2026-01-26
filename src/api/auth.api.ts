import {httpClient} from '../providers/dataProvider/httpClient.ts';
import {API} from "../constants/api.ts";

export const authApi = {
    login: (username: string, password: string) =>
        httpClient.post(`${API.AUTH.LOGIN}`, {username, password}),
    refreshToken: (tokenRefresh: string) => httpClient.post(`${API.AUTH.REFRESH}`, {tokenRefresh}),
};
