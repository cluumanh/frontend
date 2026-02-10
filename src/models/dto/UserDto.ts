import type {BaseDto} from "./BaseDto.ts";

export interface UserDto extends BaseDto {
    username: string;
    roles: string[];
}