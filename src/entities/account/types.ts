import {Common} from '../../typings/common';

export const enum TYPES {
    LOGIN = 'account/login',
    LOGOUT = 'account/logout',
    SET_AUTH = 'account/setAuth',
    AUTH = 'account/auth',
}

export enum ROLE {
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
    role?: ROLE;
}

export interface AccountDTO {
    user: UserDTO;
    access_token: string;
    refresh_token: string;
}

export interface AccountState {
    account?: AccountDTO;
    setAccount: (account?: AccountDTO) => void;
    loggedOut: boolean;
}

export interface LoginData {
    email: UserDTO['email'];
    password: string;
}

export interface LogoutData {
    quiet?: boolean;
}
