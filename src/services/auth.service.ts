import {authApi} from '../api/auth.api';
import {TokenManager} from '../store/TokenManager.ts';
import type {LoginResponse} from "../models/response/LoginResponse.ts";
import type {LoginRequest} from "../models/requests/LoginRequest.ts";

export const AuthService = {
    async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        const res = await authApi.login(loginRequest);
        const data = res?.data;

        TokenManager.setTokens(data?.accessToken, data?.refreshToken);
        return data;
    },

    logout() {
        TokenManager.clear();
    }
};
