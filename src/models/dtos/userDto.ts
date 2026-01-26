import type {BaseDTO} from "./baseDto.ts";

export interface UserDTO extends BaseDTO {
    username: string;
    roles: string[];
}