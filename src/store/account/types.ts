import {Common} from '@/typings/common';

export const enum TYPES {
    LOGIN = 'account/login',
    LOGOUT = 'account/logout',
    SET_AUTH = 'account/setAuth',
    AUTH = 'account/auth',
}

export enum ROLES {
    ADMIN = 'ADMIN',
    OBSERVER = 'OBSERVER',
    OPERATOR = 'OPERATOR',
    SECURITY_ADMIN = 'SECURITY_ADMIN',
}

export interface RoleDTO {
    name: string;
    title: string;
}

export interface UserDTO extends Common {
    email: string;
    first_name: string;
    last_name: string;
    role?: ROLES;
    avatar?: string;
}

export interface AccountDTO {
    user: UserDTO;
    access_token: string;
    refresh_token: string;
    expiration_access_token?: number;
    expiration_refresh_token?: number;
}

export interface AccountState {
    account?: AccountDTO;
    loggedOut: boolean;
}

export interface AccountAction {
    auth: (account?: AccountDTO) => void;
    logout: () => void;
}

export interface LoginData {
    email: UserDTO['email'];
    password: string;
}

export interface LogoutData {
    quiet?: boolean;
}
