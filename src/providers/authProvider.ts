import type {AuthProvider} from 'react-admin';
import {AuthService} from '../services/auth.service.ts';
import {TokenManager} from '../store/TokenManager.ts';
import type {LoginRequest} from "../models/requests/LoginRequest.ts";
import {Common} from "../constants/common.ts";
import {Role} from "../enums/roles.enum.ts";

const authProvider: AuthProvider = {
    login: async ({username, password}) => {
        const loginRequest: LoginRequest = {
            username: username,
            password: password
        }
        await AuthService.login(loginRequest);
        return Promise.resolve();
    },

    logout: () => {
        TokenManager.clear();
        AuthService.logout();
        return Promise.resolve();
    },

    checkAuth: () => {
        const token = TokenManager.getAccessToken();
        if (!token || token === 'null' || token === 'undefined') {
            return Promise.reject();
        }
        return Promise.resolve();
    },

    checkError: (error) => {
        const status = error?.status;
        if (status === 401 || status === 403) {
            TokenManager.clear();
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () =>
        Promise.resolve(localStorage.getItem(Common.ROLE_TYPE) ?? Role.ADMIN),
};

export default authProvider;
