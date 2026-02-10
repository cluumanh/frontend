import type {BaseMapper} from "./base.mapper.ts";
import type {User} from "../models/viewmodel/User.ts";
import type {UserDto} from "../models/dto/UserDto.ts";

export const UserMapper:BaseMapper<User, UserDto> = {
    toDTO(entity: User): UserDto {
        return { ...entity };
    }, toViewModel(dto: UserDto): User {
        return { ...dto };
    }
}