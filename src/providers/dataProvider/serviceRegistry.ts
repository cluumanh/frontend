import {UserService} from "../../services/user.service.ts";
import {Resources} from "../../constants/resources.ts";

export const serviceRegistry = {
    [Resources.USERS]: new UserService(),
} as const;

export type ResourceName = keyof typeof serviceRegistry;
