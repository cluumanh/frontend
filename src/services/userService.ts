import type {UserDTO} from "../models/dtos/userDto.ts";
import {BaseService} from "./baseRestService.ts";
import type {User} from "../models/entities/user.ts";
import {UserMapper} from "../mappers/userMapper.ts";
import {httpClient} from "../providers/dataProvider/httpClient.ts";

export class UserService extends BaseService<User, UserDTO> {
    constructor() {
        super('/users', UserMapper, httpClient);
    }
}
