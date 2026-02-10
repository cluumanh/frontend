import {httpClient} from '../providers/dataProvider/httpClient.ts';
import {API} from "../constants/api.ts";
import type {ApiResponseDto} from "../models/dto/ApiResponseDto.ts";
import type {LoginResponse} from "../models/response/LoginResponse.ts";
import type {LoginRequest} from "../models/requests/LoginRequest.ts";

export const authApi = {
    login: (loginRequest: LoginRequest): Promise<ApiResponseDto<LoginResponse>> =>
        httpClient.post(`${API.AUTH.LOGIN}`, loginRequest),
    refreshToken: (tokenRefresh: string): Promise<ApiResponseDto<null>> => httpClient.post(`${API.AUTH.REFRESH}`, {tokenRefresh}),
};
