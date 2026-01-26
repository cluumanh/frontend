import {UserService} from "../../services/userService.ts";

export const serviceRegistry = {
    users: new UserService(),
} as const;

export type ResourceName = keyof typeof serviceRegistry;
