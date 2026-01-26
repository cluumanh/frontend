import type {AuthProvider} from 'react-admin';
import {AuthService} from '../services/authService.ts';
import {tokenService} from '../store/tokenService';

const authService = new AuthService();

const authProvider: AuthProvider = {
    login: ({username, password}) =>
        authService.login(username, password),

    logout: () => {
        tokenService.clear();
        authService.logout();
        return Promise.resolve();
    },

    checkAuth: () => {
        const token = tokenService.getAccessToken();
        console.log("token", token);
        if (!token || token === 'null' || token === 'undefined') {
            return Promise.reject();
        }

        return Promise.resolve();
    },

    checkError: (error) => {
        const status = error?.status;
        if (status === 401 || status === 403) {
            tokenService.clear();
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () =>
        Promise.resolve(localStorage.getItem('role') ?? 'ADMIN'),
};

export default authProvider;
