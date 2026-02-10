export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    username: string;
    roles: readonly string[]
    expiresIn: number;
}