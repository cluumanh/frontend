import type {BaseViewModel} from "./BaseViewModel.ts";

export interface User extends BaseViewModel {
    username: string;
    roles: string[];
}