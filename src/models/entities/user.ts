import type {BaseEntity} from "./baseEnity.ts";

export interface User extends BaseEntity {
    username: string;
    roles: string[];
}