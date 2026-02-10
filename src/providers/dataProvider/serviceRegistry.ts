import {UserService} from "../../services/user.service.ts";

export const serviceRegistry = {
    users: new UserService(),
} as const;

export type ResourceName = keyof typeof serviceRegistry;
