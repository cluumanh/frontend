import type {BaseMapper} from "./baseMapper.ts";
import type {User} from "../models/entities/user.ts";
import type {UserDTO} from "../models/dtos/userDto.ts";

export const UserMapper:BaseMapper<User, UserDTO> = {
    toDTO(entity: User): UserDTO {
        return { ...entity };
    }, toEntity(dto: UserDTO): User {
        return { ...dto };
    }
}