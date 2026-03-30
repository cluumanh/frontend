import type {Role} from "../../enums/roles.enum.ts";

export interface RegisterRequest {
    username: string;
    password: string;
    email: string;
    roles: Array<Role>;
}