import {authApi} from '../api/auth.api';
import {tokenService} from '../store/tokenService';

export class AuthService {
    async login(username: string, password: string) {
        const res = await authApi.login(username, password);
        tokenService.setTokens(res.data.accessToken, res.data.refreshToken);
    }

    logout() {
        tokenService.clear();
    }
}
