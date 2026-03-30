import {authApi} from '../api/auth.api';
import {TokenManager} from '../store/TokenManager.ts';
import type {LoginResponse} from "../models/response/LoginResponse.ts";
import type {LoginRequest} from "../models/requests/LoginRequest.ts";
import type {RegisterRequest} from "../models/requests/RegisterRequest.ts";

export const AuthService = {
    async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        try {
            const res = await authApi.login(loginRequest);
            const data = res?.data;

            TokenManager.setTokens(data?.accessToken, data?.refreshToken);
            return data;
        } catch (error) {
            throw new Error("login failed" + error);
        }
    },

    async register(registerRequest: RegisterRequest): Promise<boolean> {
        try {
            const res = await authApi.register(registerRequest);
            return res?.success;
        } catch (err) {
            throw new Error("register failed" + err);
        }
    },

    logout() {
        TokenManager.clear();
    }
};
