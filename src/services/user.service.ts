import type {UserDto} from "../models/dto/UserDto.ts";
import {BaseService} from "./base.service.ts";
import type {User} from "../models/viewmodel/User.ts";
import {UserMapper} from "../mappers/user.mapper.ts";
import {httpClient} from "../providers/dataProvider/httpClient.ts";

export class UserService extends BaseService<User, UserDto> {
    constructor() {
        super('/users', UserMapper, httpClient);
    }
}
